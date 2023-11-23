import { Button, Container, Menu } from 'semantic-ui-react';

import { useStore } from '../stores/store';

const Navbar = () => {
  const { activityStore } = useStore();
  const { openForm } = activityStore;

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header className='header'>
          <img src='assets/logo.png' alt='Logo' style={{ marginRight: '10px' }} />
          Reactivities
        </Menu.Item>
        <Menu.Item name='Activities' />
        <Menu.Item>
          <Button
            positive
            content='Create Activity'
            onClick={() => {
              openForm();
            }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
