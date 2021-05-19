import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ModalLayout } from '../../components/ModalLayout/ModalLayout';
import Spinner from '../../components/Spinner';
import { UserForm } from '../../components/UserForm/UserForm';
import { authSelector } from '../../redux/auth/auth-selector';
import { selectUserByIdState } from '../../redux/user/user-selectors';
import { getUserById } from '../../redux/userView/userView-actions';
import { userViewSelector } from '../../redux/userView/userView-selectors';

import './User.scss';

export const User = () => {
  const { userId } = useParams();
  const { currentUser } = useSelector(authSelector);
  const { isGettingUserView } = useSelector(userViewSelector) || {};
  const { userName, image } = useSelector(selectUserByIdState(userId)) || {};

  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className='container mt-10'>
      {isGettingUserView ? (
        <Spinner />
      ) : (
        <div className='user-view'>
          <div className='user-view__img'>
            <img src={image} alt='profile-img' className='img' />
          </div>
          <div>
            <h3>Username: {userName}</h3>
          </div>
          {currentUser === userId && (
            <button type='button' className='button-form' onClick={handleEdit}>
              Edit
            </button>
          )}
          <ModalLayout isOpen={isEdit} handleClose={handleEdit}>
            <UserForm defaultUserName={userName || ''} defaultImg={image} />
          </ModalLayout>
        </div>
      )}
    </div>
  );
};
