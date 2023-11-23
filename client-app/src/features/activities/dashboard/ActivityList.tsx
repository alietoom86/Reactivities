import { SyntheticEvent, useState } from 'react';
import { Button, Icon, Item, Label, Segment } from 'semantic-ui-react';

import { Activity } from '../../../app/models/activity';

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

const ActivityList = ({ activities, selectActivity, deleteActivity, submitting }: Props) => {
  const [target, setTarget] = useState('');

  const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  };

  return (
    <Segment style={{ marginBottom: '2em' }}>
      <Item.Group>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  floated='right'
                  color='blue'
                  style={{ fontWeight: '500' }}
                  onClick={() => selectActivity(activity.id)}
                  animated
                >
                  <Button.Content visible>View</Button.Content>
                  <Button.Content hidden>
                    <Icon name='magnify' />
                  </Button.Content>
                </Button>
                <Button
                  name={activity.id}
                  floated='right'
                  color='red'
                  style={{ fontWeight: '500' }}
                  loading={submitting && activity.id === target}
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                  animated
                >
                  <Button.Content visible>Delete</Button.Content>
                  <Button.Content hidden>
                    <Icon name='trash' />
                  </Button.Content>
                </Button>
                <Label basic content={activity.category} style={{ textTransform: 'capitalize' }} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
