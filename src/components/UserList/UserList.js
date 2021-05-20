import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import UserCard from '../UserCard';

import './UserList.scss';

export const UserList = ({ loading, users, usersEmptyMessage }) => {
  return (
    <section className='users-list'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {users.length === 0 && <p>{usersEmptyMessage}</p>}
          {users.map(userId => (
            <UserCard key={userId} userId={userId} />
          ))}
        </>
      )}
    </section>
  );
};

UserList.defaultProps = {
  usersEmptyMessage: 'There is no users',
};

UserList.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  usersEmptyMessage: PropTypes.string,
};
