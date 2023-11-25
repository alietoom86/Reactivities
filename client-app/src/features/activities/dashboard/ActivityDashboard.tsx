import { Grid } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { useStore } from '../../../app/stores/store';
import ActivityList from './ActivityList';
import LoadingIndecator from '../../../app/layout/LoadingIndecator';
import ActivityFilters from './ActivityFilters';

const ActivityDashboard = () => {
  const { activityStore } = useStore();
  const { loadActivities, loadingInitial } = activityStore;

  useEffect(() => {
    loadActivities();
  }, [loadActivities]);

  if (loadingInitial) return <LoadingIndecator />;

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={10} computer={10}>
          <ActivityList />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={6} computer={6}>
          <ActivityFilters />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default observer(ActivityDashboard);
