import React from 'react';

import styles from '../styles/clouds.module.css';

function Background() {
  return (
    <div className={styles.backgroundWrap}>
      <div className={styles.x1}>
        <div className={styles.cloud}></div>
      </div>

      <div className={styles.x2}>
        <div className={styles.cloud}></div>
      </div>

      <div className={styles.x3}>
        <div className={styles.cloud}></div>
      </div>

      <div className={styles.x4}>
        <div className={styles.cloud}></div>
      </div>

      <div className={styles.x5}>
        <div className={styles.cloud}></div>
      </div>
    </div>
  );
}

export default Background;
