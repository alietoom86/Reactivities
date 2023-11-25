import { Button, Card, Image } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useStore } from '../../../app/stores/store';
import LoadingIndecator from '../../../app/layout/LoadingIndecator';

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
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button as={Link} to={`/editActivity/${activity.id}`} color="blue" content="Edit" basic />
          <Button as={Link} to="/activities" color="grey" content="Cancel" basic />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(ActivityDetails);
