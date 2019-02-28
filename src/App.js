import React, { Component } from 'react';
import View from './components/swiper';
import styles from './App.less';

class App extends Component {
  render() {
    return (
      <div className={styles['contain-wrapper']}>
        <View />
      </div>
    );
  }
}

export default App;
