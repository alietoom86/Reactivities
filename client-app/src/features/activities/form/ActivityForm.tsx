import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { useStore } from '../../../app/stores/store';
import { Activity } from '../../../app/models/activity';
import LoadingIndecator from '../../../app/layout/LoadingIndecator';

const ActivityForm = () => {
  const { activityStore } = useStore();
  const { loading, updateActivity, createActivity, loadActivity, loadingInitial } = activityStore;
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState<Activity>({
    id: '',
    title: '',
    description: '',
    category: '',
    date: '',
    city: '',
    venue: '',
  });

  useEffect(() => {
    if (id) {
      loadActivity(id).then((activity) => setActivity(activity!));
    }
  }, [id, loadActivity]);

  const handleSubmit = () => {
    activity.id ? updateActivity(activity) : createActivity(activity);
    if (activity.id) {
      updateActivity(activity).then(() => navigate(`/activities/${activity.id}`));
    } else {
      createActivity(activity).then((activity) => navigate(`/activities/${activity!.id}`));
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  if (loadingInitial) return <LoadingIndecator />;

  return (
    <Segment clearing>
      <Form onSubmit={() => handleSubmit()} autoComplete="off">
        <Form.Input placeholder="Title" value={activity.title} name="title" onChange={handleInputChange} />
        <Form.TextArea
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input placeholder="Category" value={activity.category} name="category" onChange={handleInputChange} />
        <Form.Input type="date" placeholder="Date" value={activity.date} name="date" onChange={handleInputChange} />
        <Form.Input placeholder="City" value={activity.city} name="city" onChange={handleInputChange} />
        <Form.Input placeholder="Venue" value={activity.venue} name="venue" onChange={handleInputChange} />
        <Button floated="right" type="submit" content="Submit" loading={loading} positive />
        <Button as={Link} to="/activities" floated="right" type="button" content="Cancel" />
      </Form>
    </Segment>
  );
};

export default observer(ActivityForm);
