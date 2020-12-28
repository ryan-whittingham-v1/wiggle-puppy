import React from 'react';
import { Progress } from 'semantic-ui-react';

function Animation(props) {
  return <Progress percent={props.meter * 10} indicating />;
}

export default Animation;
