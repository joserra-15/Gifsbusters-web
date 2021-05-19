import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import MediaList from '../../components/MediaList';
import SearchForm from '../../components/SearchForm';

export const Search = () => {
  /*  const dispatch = useDispatch();
  const { searchValues } = useParams();

  useEffect(() => {
    dispatch(getMedia());
  }, [dispatch]);
  return (
    <div className='container'>
      <SearchForm />
      <main className='mt-60'>
        <MediaList loading={isGettingMedia} media={media} />
      </main>
    </div>
  ); */
};
