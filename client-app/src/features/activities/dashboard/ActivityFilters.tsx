import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';

const ActivityFilters = () => {
  return (
    <>
      <Menu vertical size="large" style={{ width: '100%' }}>
        <Header icon="filter" color="teal" content="Filters" attached />
        <Menu.Item content="All Activities" />
        <Menu.Item content="I'm Going" />
        <Menu.Item content="I'm Hosting" />
      </Menu>
      <Calendar />
    </>
  );
};

export default ActivityFilters;
