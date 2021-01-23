import React from 'react';

import Clouds from './components/Clouds';
import Game from './components/Game';
import Header from './components/Header';
import styles from './styles/app.module.css';

function App() {
  return (
    <React.StrictMode>
      <div className={styles.background}>
        <Clouds />
        <Header />
        <Game />
      </div>
    </React.StrictMode>
  );
}

export default App;
