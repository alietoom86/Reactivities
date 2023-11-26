import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './Navbar';
import HomePage from '../../features/home/HomePage';

const App = () => {
  const location = useLocation();

  return (
    <>
      <ToastContainer position="bottom-right" theme="colored" />
      {location.pathname === '/' ? (
        <HomePage />
      ) : (
        <>
          <Navbar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
};

export default observer(App);
