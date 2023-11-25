import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';

const HomePage = () => {
  return (
    <Segment inverted textAlign="center" className="masthead" vertical>
      <Container text>
        <Header as="h1" inverted>
          <Image src="/assets/logo.png" size="massive" alt="logo" style={{ marginBottom: 12 }} />
          Reactivities
        </Header>
        <Header as="h2" content="Welcome to Reactivities" inverted />
        <Button as={Link} to="/activities" size="huge" inverted>
          Take me to the activities
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
