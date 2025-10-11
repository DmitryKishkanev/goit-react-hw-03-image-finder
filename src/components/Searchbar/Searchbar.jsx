import { Formik } from 'formik';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from 'components/Searchbar/Searchbar.styled';

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
            <SearchFormButtonLabel></SearchFormButtonLabel>
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
