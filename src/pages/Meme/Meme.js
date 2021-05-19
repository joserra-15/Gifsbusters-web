import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memeSelector } from '../../redux/meme/meme-selectors';
import { getMemes } from '../../redux/meme/meme-actions';
import MediaList from '../../components/MediaList';

export const Meme = () => {
  const dispatch = useDispatch();
  const { isGettingMemes, memes } = useSelector(memeSelector) || {};

  useEffect(() => {
    dispatch(getMemes());
  }, [dispatch]);

  return (
    <main className='container mt-10'>
      <MediaList loading={isGettingMemes} media={memes} />
    </main>
  );
};
