import PropTypes from 'prop-types';

import styles from '../styles/animation.module.css';
import slide1 from '../images/MM-Slide1-01.png';
import slide2 from '../images/MM-Slide2-01.png';
import slide3 from '../images/MM-Slide3-01.png';
import slide4 from '../images/MM-Slide4-01.png';
import slide5 from '../images/MM-Slide5-01.png';
import slide6 from '../images/MM-Slide6-01.png';
import slide7 from '../images/MM-Slide7-01.png';
import slide8 from '../images/MM-Slide8-01.png';
import slide9 from '../images/MM-Slide9-01.png';

function Animation(props) {
  let image = null;

  switch (props.meter) {
    case 8:
      image = slide1;
      break;
    case 7:
      image = slide2;
      break;
    case 6:
      image = slide3;
      break;
    case 5:
      image = slide4;
      break;
    case 4:
      image = slide5;
      break;
    case 3:
      image = slide6;
      break;
    case 2:
      image = slide7;
      break;
    case 1:
      image = slide8;
      break;
    case 0:
      image = slide9;
      break;
    default:
      console.log('switch error');
  }

  return <img src={image} alt="Man hanging" className={styles.img} />;
}

Animation.propTypes = {
  meter: PropTypes.number,
  updateMeter: PropTypes.func,
};

export default Animation;
