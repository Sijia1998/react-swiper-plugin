import React, { Component, Fragment } from 'react';
import Swiper from './components/swiper';
import styles from './App.less';

import imageOne from './image/angularjs.jpg';
import imageTwo from './image/react.png';
import imageThree from './image/vue.jpg';

const imgArr = [imageOne, imageTwo, imageThree];

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles['contain-wrapper']}>
          <Swiper width={500} height={200} imgList={imgArr} autoPlay />
        </div>
        <button type="button">上一张</button>
        <button type="button">下一张</button>
      </Fragment>
    );
  }
}

export default App;
