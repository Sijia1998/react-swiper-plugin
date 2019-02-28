import React, { Component } from 'react';
import styles from './swiper.less';
import Slider from './slider';
import imageOne from '../image/angularjs.jpg';
import imageTwo from '../image/react.png';
import imageThree from '../image/vue.jpg';

const imgArr = [imageOne, imageTwo, imageThree];

class Swiper extends Component {
  render() {
    return (
      <div className={styles['swiper-wrapper']}>
        <h1 className="fontStyle">Hello---React-Cli</h1>
        {imgArr.map(item => (
          <Slider imgUrl={item} />
        ))}
      </div>
    );
  }
}
export default Swiper;
