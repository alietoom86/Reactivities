import { Grid } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { useStore } from '../../../app/stores/store';
import LoadingIndecator from '../../../app/layout/LoadingIndecator';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedSideBar';

const ActivityDetails = () => {
  const { id } = useParams();
  const { activityStore } = useStore();
  const { selectedActivity: activity, loadActivity } = activityStore;

  useEffect(() => {
    if (id) {
      loadActivity(id);
    }
  }, [id, loadActivity]);

  if (!activity) return <LoadingIndecator />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat />
      </Grid.Column>
      <Grid.Column widescreen={6}>
        <ActivityDetailedSidebar />
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDetails);
