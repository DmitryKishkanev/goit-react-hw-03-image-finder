import {
  GalleryItem,
  GalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const ImageGalleryItem = ({ items, ontoggleModal }) => {
  return items.map((item, index) => (
    <GalleryItem key={`${item.id}-${index}`}>
      <button type="button" onClick={() => ontoggleModal(item)}>
        <GalleryItemImage src={item.webformatURL} alt={item.tags} />
      </button>
    </GalleryItem>
  ));
};

export default ImageGalleryItem;
