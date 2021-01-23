import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/answer.module.css';

function Answer(props) {
  const textInput = useRef(null);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleAnswerSubmission();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleAnswerSubmission() {
    props.onSubmit(parseInt(textInput.current.value));
    if (props.meter > 1) {
      textInput.current.value = '';
    }
  }

  return (
    <React.Fragment>
      <input
        ref={textInput}
        className={styles.input}
        type="text"
        name="answer"
        autoFocus
        autoComplete="off"
      />
    </React.Fragment>
  );
}

Answer.propTypes = {
  onSubmit: PropTypes.func,
  meter: PropTypes.number,
};

export default Answer;
