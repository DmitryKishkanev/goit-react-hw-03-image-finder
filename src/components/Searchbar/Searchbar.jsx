import { Formik } from 'formik';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from 'components/Searchbar/Searchbar.styled';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ imageName }, { resetForm }) => {
    onSubmit(imageName);
    resetForm();
  };

  return (
    <SearchbarHeader>
      <Formik initialValues={{ imageName: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <SearchFormButton type="submit">
            <SearchIcon
              style={{ width: '35px', height: '35px', fill: 'black' }}
            />
          </SearchFormButton>

          <SearchFormInput
            className="input"
            name="imageName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </SearchbarHeader>
  );
};

export default Searchbar;
