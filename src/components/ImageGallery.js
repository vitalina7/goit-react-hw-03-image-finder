import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <List>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          toggleModal={toggleModal}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
};



