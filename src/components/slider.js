import React, { Component } from 'react';
import styles from './slider.less';

class Slider extends Component {
  render() {
    const { imgUrl } = this.props;
    return (
      <div className={styles['slider-wrapper']}>
        <div className="slider" style={{ backgroundImage: `url(${imgUrl})` }} />
      </div>
    );
  }
}
export default Slider;
