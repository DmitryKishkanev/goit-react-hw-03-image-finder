import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryList } from 'components/ImageGallery/ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      <ImageGalleryItem items={images} />
    </ImageGalleryList>
  );
};

export default ImageGallery;
