import { makeAutoObservable, runInAction } from 'mobx';
import { v4 as uuid } from 'uuid';

import { Activity } from '../models/activity';
import agent from '../api/agent';

export default class ActivityStore {
  activitiesRegistery = new Map<string, Activity>();
  selectedActivity: Activity | undefined = undefined;
  editMode: boolean = false;
  loading: boolean = false;
  loadingInitial: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  private addActivityToRegistery = (activity: Activity) => {
    activity.date = activity.date.split('T')[0];
    this.activitiesRegistery.set(activity.id, activity);
  };

  private getActivityFromRegister = (id: string) => {
    return this.activitiesRegistery.get(id);
  };

  private setSelectedActivity = (activity: Activity) => {
    this.selectedActivity = activity;
  };

  get activitiesByDate() {
    return Array.from(this.activitiesRegistery.values()).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  }

  get groupedActivities() {
    return Object.entries(
      this.activitiesByDate.reduce((activities, activity) => {
        const date = activity.date;
        activities[date] = activities[date] ? [...activities[date], activity] : [activity];
        return activities;
      }, {} as { [key: string]: Activity[] })
    );
  }

  loadActivities = async () => {
    this.loadingInitial = true;
    try {
      const list = await agent.Activities.List();
      runInAction(() => {
        list.forEach((activity) => {
          this.addActivityToRegistery(activity);
        });
      });
      this.setLoadingInitial(false);
    } catch (err) {
      console.log(err);
      this.setLoadingInitial(false);
    }
  };

  loadActivity = async (id: string) => {
    let activity = this.getActivityFromRegister(id);
    if (activity) {
      this.setSelectedActivity(activity);
      return activity;
    } else {
      this.setLoadingInitial(true);

      try {
        activity = await agent.Activities.details(id);
        this.addActivityToRegistery(activity);
        this.setSelectedActivity(activity);
        this.setLoadingInitial(false);
        return activity;
      } catch (err) {
        console.log(err);
        this.setLoadingInitial(false);
      }
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createActivity = async (activity: Activity) => {
    this.loading = true;
    activity.id = uuid();

    try {
      await agent.Activities.create(activity);
      this.setSelectedActivity(activity);
      runInAction(() => {
        this.activitiesRegistery.set(activity.id, activity);
        this.loading = false;
        this.editMode = false;
      });
      return activity;
    } catch (err) {
      console.log(err);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  updateActivity = async (activity: Activity) => {
    this.loading = true;

    try {
      await agent.Activities.update(activity);
      this.addActivityToRegistery(activity);
      this.setSelectedActivity(activity);
      runInAction(() => {
        this.loading = false;
        this.editMode = false;
      });
    } catch (err) {
      console.log(err);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  deleteActivity = async (id: string) => {
    this.loading = true;
    try {
      await agent.Activities.delete(id);
      runInAction(() => {
        this.activitiesRegistery.delete(id);
        this.loading = false;
      });
    } catch (err) {
      console.log(err);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
