import { Button, Container, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" header className="header">
          <img src="assets/logo.png" alt="Logo" style={{ marginRight: '10px' }} />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Activities" />
        <Menu.Item as={NavLink} to="/createActivity">
          <Button positive content="Create Activity" />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/errors" name="Errors" />
      </Container>
    </Menu>
  );
};

export default Navbar;
