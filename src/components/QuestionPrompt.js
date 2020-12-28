import React from 'react';
import PropTypes from 'prop-types';

function QuestionPrompt(props) {
  return <h1>{props.text}</h1>;
}

QuestionPrompt.propTypes = {
  text: PropTypes.string,
};

export default QuestionPrompt;
