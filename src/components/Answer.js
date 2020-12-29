import React from 'react';
import PropTypes from 'prop-types';

function Answer(props) {
  function handleAnswerSubmission(event) {
    event.preventDefault();
    props.onSubmit(parseInt(event.target.answer.value));
    event.target.answer.value = '';
  }

  return (
    <React.Fragment>
      <form onSubmit={handleAnswerSubmission} autoComplete="off">
        <input type="text" name="answer" autoFocus />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

Answer.propTypes = {
  onSubmit: PropTypes.func,
};

export default Answer;
