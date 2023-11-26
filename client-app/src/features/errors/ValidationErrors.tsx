import { Message } from 'semantic-ui-react';

interface Props {
  errors: string[];
}

const ValidationErrors = ({ errors }: Props) => {
  return (
    <Message error>
      <Message.List>
        {errors.map((err, i) => (
          <Message.Item key={i}>{err}</Message.Item>
        ))}
      </Message.List>
    </Message>
  );
};

export default ValidationErrors;
