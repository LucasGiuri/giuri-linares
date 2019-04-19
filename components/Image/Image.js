import noPhoto from '../../assets/images/ferrari.jpg';
import PropTypes from 'prop-types';

const Image = ({imageSrc}) => <img src={imageSrc ? imageSrc: noPhoto} alt="" />

Image.propTypes = {
  imageSrc: PropTypes.string
};

Image.defaultProps = {
	imageSrc: ''
};

export default Image;