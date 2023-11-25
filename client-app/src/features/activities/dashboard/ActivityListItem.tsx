import { Button, Icon, Item, ItemGroup, ItemImage, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { Activity } from '../../../app/models/activity';

interface Props {
  activity: Activity;
}

const ActivityListItem = ({ activity }: Props) => {
  return (
    <Segment.Group>
      <Segment>
        <ItemGroup>
          <Item>
            <ItemImage size="tiny" src="/assets/user.png" circular />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </Item.Header>
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <span style={{ display: 'inline-block', marginRight: '10px' }}>
            <Icon name="clock" />
            {activity.date}
          </span>
          <span>
            <Icon name="marker" />
            {activity.venue}
          </span>
        </span>
      </Segment>
      <Segment secondary>Attendees goes here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated="right"
          color="teal"
          style={{ fontWeight: '500' }}
          animated
        >
          <Button.Content visible>View</Button.Content>
          <Button.Content hidden>
            <Icon name="magnify" />
          </Button.Content>
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;
