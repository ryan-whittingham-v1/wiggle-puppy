import React from 'react';
import { Progress } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function Animation(props) {
  return <Progress percent={props.meter * 10} indicating />;
}

Animation.propTypes = {
  meter: PropTypes.number,
};

export default Animation;
