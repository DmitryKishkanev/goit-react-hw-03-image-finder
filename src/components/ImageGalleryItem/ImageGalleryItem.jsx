import {
  GalleryItem,
  GalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const ImageGalleryItem = ({ items }) => {
  return items.map((item, index) => (
    <GalleryItem key={`${item.id}-${index}`}>
      <GalleryItemImage src={item.webformatURL} alt="" />
    </GalleryItem>
  ));
};

export default ImageGalleryItem;
