const ImageGalleryItem = ({ items }) => {
  return items.map(item => (
    <li className="gallery-item" key={item.id}>
      <img src={item.webformatURL} alt="" />
    </li>
  ));
};

export default ImageGalleryItem;
