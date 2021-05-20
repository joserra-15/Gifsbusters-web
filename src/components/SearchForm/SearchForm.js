import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

import { useDispatch } from 'react-redux';
import { SearchTypes } from '../../redux/search/search-types';
import {
  filterChangeGif,
  filterChangeMeme,
  filterChangeUser,
} from '../../redux/search/search-actions';
import { validationSchema } from '../../utils/validationSchema';
import { useTranslation } from 'react-i18next';

import './SearchForm.scss';

export const SearchForm = () => {
  const history = useHistory();
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { search: '', filter: [] },
    validationSchema: validationSchema.search,
    onSubmit: values => {
      dispatch(
        filterChangeGif(
          values.filter.includes(SearchTypes.SEARCH_FILTER_GIF_CHANGE),
        ),
      );
      dispatch(
        filterChangeMeme(
          values.filter.includes(SearchTypes.SEARCH_FILTER_MEME_CHANGE),
        ),
      );
      dispatch(
        filterChangeUser(
          values.filter.includes(SearchTypes.SEARCH_FILTER_USER_CHANGE),
        ),
      );
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
          autoComplete='off'
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
            className='checkbox-search none'
            name='filter'
            id='filterMeme'
            onChange={formik.handleChange}
            value={SearchTypes.SEARCH_FILTER_MEME_CHANGE}
          />
          <label htmlFor='filterMeme' className='label-search'>
            Memes
          </label>
        </div>
        <div className='flex'>
          <input
            type='checkbox'
            className='checkbox-search none'
            name='filter'
            id='filterGif'
            onChange={formik.handleChange}
            value={SearchTypes.SEARCH_FILTER_GIF_CHANGE}
          />
          <label htmlFor='filterGif' className='label-search'>
            Gifs
          </label>
        </div>
        <div className='flex'>
          <input
            type='checkbox'
            className='checkbox-search none'
            name='filter'
            id='filterUser'
            onChange={formik.handleChange}
            value={SearchTypes.SEARCH_FILTER_USER_CHANGE}
          />
          <label htmlFor='filterUser' className='label-search'>
            {t('home.users')}
          </label>
        </div>
      </div>
      {formik.errors.filter && (
        <div className=' text-white'>{formik.errors.filter}</div>
      )}
    </form>
  );
};
