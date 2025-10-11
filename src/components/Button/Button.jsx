import { LoadMoreBtn } from 'components/Button/Button.styled';

const Button = ({ loadMore }) => {
  return (
    <div>
      <LoadMoreBtn onClick={loadMore}>
        <span>Load more</span>
      </LoadMoreBtn>
    </div>
  );
};

export default Button;
