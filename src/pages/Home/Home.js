import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MediaList from '../../components/MediaList';
import SearchForm from '../../components/SearchForm';
import { getMedia } from '../../redux/home/home-actions';
import { homeSelector } from '../../redux/home/home-selectors';

export const Home = () => {
  const dispatch = useDispatch();
  const { isGettingMedia, media } = useSelector(homeSelector) || {};

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
  );
};
