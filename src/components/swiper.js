import React, { Component } from 'react';
import styles from './swiper.less';

const Slider = props => {
  const { imgUrl } = props;
  return <img className="slider" src={imgUrl} alt="pic" />;
};

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      timer: null
    };
  }

  componentDidMount() {
    const { autoPlay } = this.props;
    // const { timer } = this.state;
    console.log(autoPlay);
    if (autoPlay) {
      this.timerId = setInterval(() => {
        this.setCurrentIdx();
      }, 2000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  setCurrentIdx = () => {
    const { currentIndex } = this.state;
    console.log(currentIndex);
  };

  render() {
    const { width, height, imgList } = this.props;
    const sliderStyle = {
      width,
      height
    };
    return (
      <div className={styles['swiper-wrapper']} style={sliderStyle}>
        {imgList.map((item, idx) => (
          <Slider imgUrl={item} key={idx + 1} />
        ))}
      </div>
    );
  }
}
export default Swiper;
