import { useState, useEffect } from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';

import './App.css';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Activities').then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Header as='h2' textAlign='right'>
        <Icon name='users' />
        <Header.Content>Reactivities</Header.Content>
      </Header>
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
