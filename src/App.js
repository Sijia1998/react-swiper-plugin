import React, { Component, Fragment } from 'react';
import Swiper from './components/swiper';
import styles from './App.less';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles['contain-wrapper']}>
          <Swiper width={500} height={200} />
        </div>
        <button type="button">上一张</button>
        <button type="button">下一张</button>
      </Fragment>
    );
  }
}

export default App;
