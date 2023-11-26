import { observer } from 'mobx-react-lite';
import { Container, Header, Segment } from 'semantic-ui-react';

import { useStore } from '../../app/stores/store';

const ServerError = () => {
  const { commonStore } = useStore();

  return (
    <Container>
      <Header as="h1" content="Server Error" />
      <Header as="h5" content={commonStore.error?.message} color="red" sub />
      {commonStore.error?.details && (
        <Segment>
          <Header as="h5" color="teal">
            <p>Stack Trace</p>
            <hr />
            <code style={{ marginTop: '10px' }}>{commonStore.error.details}</code>
          </Header>
        </Segment>
      )}
    </Container>
  );
};

export default observer(ServerError);
