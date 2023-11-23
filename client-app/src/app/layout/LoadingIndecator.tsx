import { Dimmer, Loader } from 'semantic-ui-react';

interface Props {
  inverted?: boolean;
  content?: string;
}

const LoadingIndecator = ({ inverted = true, content = 'Loadding...' }: Props) => {
  return (
    <Dimmer active={true} inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
};

export default LoadingIndecator;
