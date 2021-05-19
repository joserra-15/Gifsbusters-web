import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

import './SearchForm.scss';

export const SearchForm = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: { search: '' },
    onSubmit: values => {
      history.push(`${ROUTES.SEARCH_WHITHOUT_PARAM}${values.search}`);
    },
  });
  return (
    <form className='w-full search-form px-10' onSubmit={formik.handleSubmit}>
      <div>
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
        <button
          type='submit'
          className='button-form button-min-width button-icon'>
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );
};
