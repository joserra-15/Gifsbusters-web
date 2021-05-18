import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../routes/routes';
import { getMedia } from '../../redux/Home/home-actions';

// import './Home.scss';

export const Home = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: { search: '' },
    onSubmit: values => {
      history.push(`${ROUTES.SEARCH_WHITHOUT_PARAM}${values.search}`);
    },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMedia());
  }, [dispatch]);

  return (
    <div className='App-container' onSubmit={formik.handleSubmit}>
      <form className='w-full flex flex-align-center search-form px-10'>
        <input
          type='text'
          className='input-group__input'
          name='search'
          id='search'
          placeholder='Search...'
          aria-label='search'
          onChange={formik.handleChange}
          value={formik.values.search}
        />
        <button className='button-form button-min-width button-icon'>
          <AiOutlineSearch />
        </button>
      </form>
      <main></main>
    </div>
  );
};
