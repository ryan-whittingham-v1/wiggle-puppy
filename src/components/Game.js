import React from 'react';
import Button from './Button';
import Animation from './Animation';
import Answer from './Answer';
import QuestionPrompt from './QuestionPrompt';
import Timer from './Timer';

import styles from '../styles/game.module.css';
import { problems } from '../problems';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      answer: null,
      userAnswer: null,
      question: null,
      meter: 8,
      questionKey: 1,
      intervalId: null,
      timer: 0,
      timerId: null,
    };
  }

  handleStartButton = () => {
    this.setState(
      (prevState) => ({
        running: !prevState.running,
      }),
      () => {
        if (this.state.running) {
          let intervalId = setInterval(this.meterDrain, 2000);
          this.setState({ intervalId: intervalId });
          let timerId = setInterval(this.timerCount, 1000);
          this.setState({ timerId: timerId });
          this.getRandomQuestion();
        } else {
          clearInterval(this.state.intervalId);
          clearInterval(this.state.timerId);
        }
        if (this.state.meter === 0) {
          this.resetGame();
        }
      }
    );
  };

  timerCount = () => {
    this.setState((prevState) => ({
      timer: prevState.timer + 1000,
    }));
  };

  handleAnswerSubmit = (newAnswer) => {
    this.setState(
      {
        userAnswer: newAnswer,
      },
      () => {
        if (this.state.userAnswer === this.state.answer) {
          if (this.state.meter < 8) {
            this.setState((prevState) => ({
              meter: prevState.meter + 1,
            }));
          }
          this.getRandomQuestion();
        } else {
          if (this.state.meter > 0) {
            this.meterDrain();
          }
        }
      }
    );
  };

  getRandomQuestion = () => {
    const newProblem = problems[Math.floor(Math.random() * problems.length)];
    this.updateQuestionKey();
    this.setState({
      question: newProblem.question,
      answer: newProblem.answer,
    });
  };

  meterDrain = () => {
    this.setState(
      (prevState) => ({
        meter: prevState.meter - 1,
      }),
      () => {
        if (this.state.meter === 0) {
          this.setState(() => ({
            running: false,
          }));
        }
      }
    );
  };

  resetGame = () => {
    this.setState(() => ({
      meter: 8,
      timer: 0,
    }));
  };

  updateQuestionKey = () => {
    this.setState((prevState) => ({
      questionKey: prevState.questionKey + 1,
    }));
  };

  render() {
    let buttonText = 'Start';
    let question = null;
    let answerInput = null;
    let message = (
      <div>
        <p>Show off your math skills and hang on.</p>
        <p>How long can you last?</p>
      </div>
    );
    let timer = null;

    if (this.state.running) {
      buttonText = 'Pause';
      question = (
        <QuestionPrompt
          key={this.state.questionKey}
          text={this.state.question}
        />
      );
      answerInput = (
        <Answer onSubmit={this.handleAnswerSubmit} meter={this.state.meter} />
      );
      message = null;
      timer = <Timer time={this.state.timer} />;
    } else {
      if (this.state.meter === 0) {
        clearInterval(this.state.intervalId);
        clearInterval(this.state.timerId);
        buttonText = 'Reset';
        let minutes = Math.floor(this.state.timer / 60000);
        let seconds = (this.state.timer / 1000) % 60;
        if (minutes === 0) {
          message = <p>{`You held on for ${seconds} seconds.`}</p>;
        }
        if (minutes === 1) {
          message = (
            <p>{`You held on for ${minutes} minute and ${seconds} seconds.`}</p>
          );
        }
        if (minutes >= 2) {
          message = (
            <p>
              {`You held on for ${minutes} minutes and ${seconds} seconds.`}
            </p>
          );
        }
      }

      if (this.state.timer > 0 && this.state.meter > 0) {
        buttonText = 'Resume';
      }
    }

    return (
      <div className={styles.game}>
        <div className={styles.animation}>
          <Animation
            meter={this.state.meter}
            updateMeter={this.meterDrain}
            gameStatus={this.state.running}
          />
        </div>
        <div className={styles.message}>{message}</div>
        <div className={styles.startButton}>
          <Button handleClick={this.handleStartButton} text={buttonText} />
        </div>
        <div className={styles.question}>{question}</div>
        <div className={styles.answerInput}>{answerInput}</div>
        <div className={styles.time}>{timer}</div>
      </div>
    );
  }
}

export default Game;
