import { Grid } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../../app/stores/store';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

const ActivityDashboard = () => {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={10} computer={10}>
          <ActivityList />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={6} computer={6}>
          {selectedActivity && !editMode && <ActivityDetails />}
          {editMode && <ActivityForm />}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default observer(ActivityDashboard);
