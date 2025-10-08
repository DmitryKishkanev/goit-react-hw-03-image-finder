import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem items={images} />
    </ul>
  );
};

export default ImageGallery;
