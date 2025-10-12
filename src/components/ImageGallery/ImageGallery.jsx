import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryList } from 'components/ImageGallery/ImageGallery.styled';

const ImageGallery = ({ images, ontoggleModal }) => {
  return (
    <ImageGalleryList>
      <ImageGalleryItem items={images} ontoggleModal={ontoggleModal} />
    </ImageGalleryList>
  );
};

export default ImageGallery;
