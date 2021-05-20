import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import MediaList from '../../components/MediaList';
import SearchForm from '../../components/SearchForm';
import UserList from '../../components/UserList';
import {
  getSearchGif,
  getSearchMeme,
  getSearchUser,
} from '../../redux/search/search-actions';
import { searchSelector } from '../../redux/search/search-selectors';

export const Search = () => {
  const dispatch = useDispatch();
  const { searchValue } = useParams();
  const {
    filterMeme,
    filterGif,
    filterUser,
    isGettingMemes,
    memes,
    isGettingGifs,
    gifs,
    isGettingUsers,
    users,
  } = useSelector(searchSelector) || {};

  useEffect(() => {
    if (filterMeme) {
      dispatch(getSearchMeme(searchValue));
    }
    if (filterGif) {
      dispatch(getSearchGif(searchValue));
    }
    if (filterUser) {
      dispatch(getSearchUser(searchValue));
    }
  }, [dispatch, searchValue, filterUser, filterGif, filterMeme]);
  return (
    <div className='container'>
      <SearchForm />
      <main className='mt-100 text-white'>
        {filterMeme && (
          <>
            <h3 className='px-10'>Results of memes: </h3>
            <MediaList
              loading={isGettingMemes}
              media={memes}
              mediaEmptyMessage={`Does not match memes with ${searchValue}`}
            />
          </>
        )}
        {filterGif && (
          <>
            <h3 className='px-10'>Results of gifs: </h3>
            <MediaList
              loading={isGettingGifs}
              media={gifs}
              mediaEmptyMessage={`Does not match gifs with ${searchValue}`}
            />
          </>
        )}
        {filterUser && (
          <>
            <h3 className='px-10'>Results of users: </h3>
            <UserList
              loading={isGettingUsers}
              users={users}
              usersEmptyMessage={`Does not match users with ${searchValue}`}
            />
          </>
        )}
      </main>
    </div>
  );
};
