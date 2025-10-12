import {
  GalleryItem,
  GalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const ImageGalleryItem = ({ items, ontoggleModal }) => {
  return items.map((item, index) => (
    <GalleryItem key={`${item.id}-${index}`}>
      <button
        type="button"
        style={{ all: 'unset', cursor: 'pointer' }}
        onClick={ontoggleModal}
      >
        <GalleryItemImage src={item.webformatURL} alt="" />
      </button>
    </GalleryItem>
  ));
};

export default ImageGalleryItem;
