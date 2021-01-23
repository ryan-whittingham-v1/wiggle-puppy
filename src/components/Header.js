import React from 'react';

import styles from '../styles/header.module.css';
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header1}>HANG OUT</div>
      <div className={styles.header2}>WITH MATH</div>
    </div>
  );
}

export default Header;
