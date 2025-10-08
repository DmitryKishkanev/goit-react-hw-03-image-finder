import { Formik, Form, Field } from 'formik';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ imageName }, { resetForm }) => {
    onSubmit(imageName);
    resetForm();
  };

  return (
    <header className="searchbar">
      <Formik initialValues={{ imageName: '' }} onSubmit={handleSubmit}>
        <Form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <Field
            className="input"
            name="imageName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};

export default Searchbar;
