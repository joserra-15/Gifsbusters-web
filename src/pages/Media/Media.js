import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import Spinner from '../../components/Spinner';
import { authSelector } from '../../redux/auth/auth-selector';
import {
  deleteMedia,
  editMedia,
  editMediaReset,
  getMediaById,
} from '../../redux/mediaView/mediaView-actions';
import { mediaViewSelector } from '../../redux/mediaView/mediaView-selectors';
import { selectMediaByIdState } from '../../redux/media/media-selectors';
import { toast } from 'react-toastify';

import './Media.scss';
import { selectUserByIdState } from '../../redux/user/user-selectors';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';
import { ModalLayout } from '../../components/ModalLayout/ModalLayout';
import { MediaForm } from '../../components/MediaForm/MediaForm';
import ConfirmText from '../../components/ConfirmText';

export const Media = () => {
  const { mediaId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(authSelector);
  const { isGettingMediaView, isEditingMediaView, editMediaViewSuccess } =
    useSelector(mediaViewSelector) || {};
  const { title, media, type, owner } =
    useSelector(selectMediaByIdState(mediaId)) || {};
  const { userName } = useSelector(selectUserByIdState(owner)) || {};
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    dispatch(getMediaById(mediaId));
  }, [dispatch, mediaId]);

  const handleEdit = useCallback(() => {
    setIsEdit(prevState => !prevState);
  }, [setIsEdit]);

  const handleResetEdit = useCallback(() => {
    dispatch(editMediaReset());
  }, [dispatch]);

  const handleRemove = () => {
    dispatch(deleteMedia(mediaId));
    history.goBack();
  };
  const handleConfirmDelete = () => {
    setIsDelete(!isDelete);
  };

  const handleSubmitEditForm = ({ title, type }) => {
    dispatch(editMedia({ title, type, mediaId }));
  };

  const copyLink = () => {
    let aux = document.createElement('input');
    aux.setAttribute('value', media);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
    toast.success('copy correctly!');
  };
  return (
    <div className='container mt-60'>
      {isGettingMediaView ? (
        <Spinner />
      ) : (
        <div className='media-view'>
          <section className='media-view__img'>
            <img src={media} alt={title} className='img' />
          </section>
          <section className='media-view__options'>
            {owner === currentUser && (
              <>
                <button
                  type='button'
                  className='button-form'
                  onClick={handleEdit}>
                  Edit
                </button>
                <button
                  type='button'
                  className='button-form'
                  onClick={handleConfirmDelete}>
                  Delete
                </button>
              </>
            )}
          </section>
          <section className='media-view__info'>
            <div>
              <h3>Title:</h3>
              <p>{title}</p>
            </div>
            <div>
              <h3>Category: </h3>
              <p>{type}</p>
            </div>
          </section>
          <section className='media-view__url'>
            <p>Url:</p>
            <input type='text' value={media} readOnly />
            <button type='button' className='button-form' onClick={copyLink}>
              Copy
            </button>
          </section>
          <Link to={`${ROUTES.USER_WHITHOUT_PARAM}${owner}`}>
            Upload by {userName}
          </Link>
          <ModalLayout isOpen={isEdit} handleClose={handleEdit}>
            <MediaForm
              defaultTitle={title}
              defaultType={type}
              handleSubmit={handleSubmitEditForm}
              handleCancel={handleEdit}
              handleReset={handleResetEdit}
              loading={isEditingMediaView}
              success={editMediaViewSuccess}
            />
          </ModalLayout>

          <ModalLayout isOpen={isDelete} handleClose={handleConfirmDelete}>
            <ConfirmText
              handleRemove={handleRemove}
              onCancel={handleConfirmDelete}
              title={title}
            />
          </ModalLayout>
        </div>
      )}
    </div>
  );
};
