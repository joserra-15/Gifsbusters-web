import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import MediaList from '../../components/MediaList';
import SearchForm from '../../components/SearchForm';
import { getSearchMeme } from '../../redux/search/search-actions';
import { searchSelector } from '../../redux/search/search-selectors';

export const Search = () => {
  const dispatch = useDispatch();
  const { searchValues } = useParams();
  const { filterMeme, filterGif, filterUser, isGettingMemes, memes } =
    useSelector(searchSelector) || {};

  useEffect(() => {
    if (filterMeme) {
      dispatch(getSearchMeme(searchValues));
    }
    if (filterGif) {
      dispatch();
    }
    if (filterUser) {
      dispatch();
    }
  }, [dispatch, searchValues]);
  return (
    <div className='container'>
      <SearchForm />
      <main className='mt-70'>
        <MediaList loading={isGettingMemes} media={memes} />
      </main>
    </div>
  );
};
