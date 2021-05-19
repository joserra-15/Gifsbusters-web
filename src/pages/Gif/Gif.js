import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MediaList from '../../components/MediaList';
import { getGifs } from '../../redux/gif/gif-actions';
import { gifSelector } from '../../redux/gif/gif-selectors';

export const Gif = () => {
  const dispatch = useDispatch();
  const { isGettingGifs, gifs } = useSelector(gifSelector) || {};

  useEffect(() => {
    dispatch(getGifs());
  }, [dispatch]);

  return (
    <main className='container mt-10'>
      <MediaList loading={isGettingGifs} media={gifs} />
    </main>
  );
};
