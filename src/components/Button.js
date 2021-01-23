import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/button.module.css';

function Button(props) {
  return (
    <button className={styles.button} onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
