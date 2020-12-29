import React from 'react';
import Start from './Start';
import Animation from './Animation';
import Answer from './Answer';
import QuestionPrompt from './QuestionPrompt';
import Settings from './Settings';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operations: {
        multiply: true,
        division: true,
        addition: true,
        subtraction: true,
      },
      range: {
        low: 1,
        high: 10,
      },
      running: false,
      settingsStatus: false,
      answer: null,
      userAnswer: 3,
      question: null,
      meter: 10,
    };
  }

  handleStartButton = () => {
    this.setState((prevState) => ({
      running: !prevState.running,
    }));
    this.getRandomQuestion();
  };

  handleSettingsButton = () => {
    this.setState((prevState) => ({
      settingsStatus: !prevState.settingsStatus,
    }));
  };

  handleAnswerSubmit = (newAnswer) => {
    this.setState(
      {
        userAnswer: newAnswer,
      },
      () => {
        if (this.state.userAnswer === this.state.answer) {
          if (this.state.meter < 10) {
            this.setState((prevState) => ({
              meter: prevState.meter + 1,
            }));
          }
          this.getRandomQuestion();
        } else {
          if (this.state.meter > 0) {
            this.setState((prevState) => ({
              meter: prevState.meter - 1,
            }));
          }
        }
      }
    );
  };

  getRandomQuestion = () => {
    const numA = Math.floor(
      Math.random() *
        (this.state.range.high - this.state.range.low + this.state.range.low)
    );
    const numB = Math.floor(
      Math.random() *
        (this.state.range.high - this.state.range.low + this.state.range.low)
    );

    const availableOperations = [];
    for (const operation in this.state.operations) {
      if (this.state.operations[operation]) {
        availableOperations.push(operation);
      }
    }
    const operator =
      availableOperations[
        Math.floor(Math.random() * availableOperations.length)
      ];

    switch (operator) {
      case 'multiply':
        this.setState({
          answer: numA * numB,
          question: `${numA} * ${numB}`,
        });
        break;
      case 'division':
        this.setState({
          answer: numA / numB,
          question: `${numA} / ${numB}`,
        });
        break;
      case 'addition':
        this.setState({
          answer: numA + numB,
          question: `${numA} + ${numB}`,
        });
        break;
      case 'subtraction':
        this.setState({
          answer: numA - numB,
          question: `${numA} - ${numB}`,
        });
        break;
      default:
        console.log('switch error');
    }
  };

  render() {
    let question = null;
    let animation = null;
    let answerInput = null;

    if (this.state.running) {
      question = <QuestionPrompt text={this.state.question} />;
      animation = <Animation meter={this.state.meter} />;
      answerInput = <Answer onSubmit={this.handleAnswerSubmit} />;
    }

    return (
      <React.Fragment>
        <Settings
          handleClick={this.handleSettingsButton}
          open={this.state.settingsStatus}
        />
        <Start
          handleClick={this.handleStartButton}
          gameRunning={this.state.running}
        />
        {animation}
        {question}
        {answerInput}
      </React.Fragment>
    );
  }
}

export default Game;
