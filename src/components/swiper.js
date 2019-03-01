import React, { Component } from 'react';
import styles from './swiper.less';
// import Slider from './slider';
import imageOne from '../image/angularjs.jpg';
import imageTwo from '../image/react.png';
import imageThree from '../image/vue.jpg';

const imgArr = [imageOne, imageTwo, imageThree];

const Slider = props => {
  const { imgUrl } = props;
  return <img className="slider" src={imgUrl} alt="pic" />;
};

class Swiper extends Component {
  render() {
    const { width, height } = this.props;
    const sliderStyle = {
      width,
      height
    };
    return (
      <div className={styles['swiper-wrapper']} style={sliderStyle}>
        {imgArr.map((item, idx) => (
          <Slider imgUrl={item} key={idx + 1} />
        ))}
      </div>
    );
  }
}
export default Swiper;
