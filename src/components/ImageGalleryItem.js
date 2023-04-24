
import PropTypes from 'prop-types';
import { ImageGalleryEl, ImageGalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, toggleModal }) => {
  return (
    <ImageGalleryEl onClick={(evt) => { toggleModal(image.largeImageURL, image.tags) }}>
      <ImageGalleryItemImage  loading="lazy" src={image.webformatURL} alt={image.tags} />
    </ImageGalleryEl>
  );
};

ImageGalleryItem.propTypes = {
    image: PropTypes.object.isRequired,
    toggleModal:PropTypes.func.isRequired
};



