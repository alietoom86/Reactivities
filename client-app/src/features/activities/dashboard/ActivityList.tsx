import { Icon, Label, Segment } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';

import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItem';

const ActivityList = () => {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => {
        return (
          <Fragment key={group}>
            <Segment>
              <Label color="teal" ribbon>
                <Icon name="calendar alternate" />
                {group}
              </Label>
              <Segment style={{ marginBottom: '2em', border: 'none', boxShadow: 'none' }}>
                {activities.map((activity) => (
                  <ActivityListItem key={activity.id} activity={activity} />
                ))}
              </Segment>
            </Segment>
          </Fragment>
        );
      })}
    </>
  );
};

export default observer(ActivityList);
