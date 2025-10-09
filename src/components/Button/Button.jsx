const Button = ({ loadMore }) => {
  return (
    <div>
      <button type="button" onClick={loadMore}>
        <span>Load more</span>
      </button>
    </div>
  );
};

export default Button;
