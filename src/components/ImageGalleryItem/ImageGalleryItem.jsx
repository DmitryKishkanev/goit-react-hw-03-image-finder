const ImageGalleryItem = ({ items }) => {
  return items.map((item, index) => (
    <li className="gallery-item" key={`${item.id}-${index}`}>
      <img src={item.webformatURL} alt="" />
    </li>
  ));
};

export default ImageGalleryItem;
