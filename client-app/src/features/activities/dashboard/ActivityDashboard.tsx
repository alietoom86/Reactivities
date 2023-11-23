import { Grid } from 'semantic-ui-react';

import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEditActivity: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

const ActivityDashboard = ({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  createOrEditActivity,
  deleteActivity,
  submitting,
}: Props) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={10} computer={10}>
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}
            submitting={submitting}
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={6} computer={6}>
          {selectedActivity && !editMode && (
            <ActivityDetails
              activity={selectedActivity}
              cancelSelectActivity={cancelSelectActivity}
              openForm={openForm}
            />
          )}
          {editMode && (
            <ActivityForm
              activity={selectedActivity}
              closeForm={closeForm}
              createOrEditActivity={createOrEditActivity}
              submitting={submitting}
            />
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ActivityDashboard;
