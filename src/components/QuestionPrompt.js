import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/questionPrompt.module.css';

function QuestionPrompt(props) {
  return <h1 className={styles.flip}>{props.text}</h1>;
}

QuestionPrompt.propTypes = {
  text: PropTypes.string,
};

export default QuestionPrompt;
