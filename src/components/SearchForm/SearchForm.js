import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

import './SearchForm.scss';
import { useDispatch } from 'react-redux';
import { SearchTypes } from '../../redux/search/search-types';
import {
  filterChangeGif,
  filterChangeMeme,
  filterChangeUser,
} from '../../redux/search/search-actions';
import { validationSchema } from '../../utils/validationSchema';

export const SearchForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { search: '', filter: [] },
    validationSchema: validationSchema.search,
    onSubmit: values => {
      history.push(`${ROUTES.SEARCH_WHITHOUT_PARAM}${values.search}`);
    },
  });
  return (
    <form className='w-full search-form px-10' onSubmit={formik.handleSubmit}>
      <div className='search-form__bar'>
        <input
          type='text'
          name='search'
          className='w-full'
          id='search'
          placeholder='Search...'
          aria-label='search'
          onChange={e => {
            formik.handleChange(e);
          }}
          value={formik.values.search}
        />
        <button
          type='submit'
          className='button-form button-min-width button-icon'>
          <AiOutlineSearch />
        </button>
      </div>
      <div className='search-form__filter'>
        <div className='flex'>
          <input
            type='checkbox'
            className=''
            name='filter'
            id='filterMeme'
            onChange={e => {
              dispatch(filterChangeMeme(e.target.checked));
              formik.handleChange(e);
            }}
            value={SearchTypes.SEARCH_FILTER_MEME_CHANGE}
          />
          <label htmlFor='filterMeme'>Memes</label>
        </div>
        <div className='flex'>
          <input
            type='checkbox'
            className=''
            name='filter'
            id='filterGif'
            onChange={e => {
              dispatch(filterChangeGif(e.target.checked));
              formik.handleChange(e);
            }}
            value={SearchTypes.SEARCH_FILTER_GIF_CHANGE}
          />
          <label htmlFor='filterGif'>Gifs</label>
        </div>
        <div className='flex'>
          <input
            type='checkbox'
            className=''
            name='filter'
            id='filterUser'
            onChange={e => {
              dispatch(filterChangeUser(e.target.checked));
              formik.handleChange(e);
            }}
            value={SearchTypes.SEARCH_FILTER_USER_CHANGE}
          />
          <label htmlFor='filterUser'>Users</label>
        </div>
      </div>
    </form>
  );
};
