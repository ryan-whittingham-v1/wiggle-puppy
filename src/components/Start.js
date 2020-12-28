import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

function Start(props) {
  let startButtonText = null;
  if (props.gameRunning) {
    startButtonText = 'Stop';
  } else {
    startButtonText = 'Start';
  }
  return <Button onClick={props.handleClick}>{startButtonText}</Button>;
}

Start.propTypes = {
  gameRunning: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Start;
