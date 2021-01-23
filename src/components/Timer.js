import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/timer.module.css';

function Timer(props) {
  let min = Math.floor(props.time / 60000);
  let sec = (props.time / 1000) % 60;

  if (sec < 10) {
    sec = String('0' + sec);
  }

  return <div className={styles.timer}>{`${min}:${sec}`}</div>;
}

Timer.propTypes = {
  time: PropTypes.number,
};

export default Timer;
