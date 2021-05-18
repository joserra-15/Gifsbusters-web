import { UploadTypes } from './upload-types';
import api from '../../api';
import * as auth from '../../services/auth';
import { signOutSuccess } from '../auth/auth-actions';
import { mediaUpload } from '../../services/cloudinary';

export const uploadMediaRequest = () => ({
  type: UploadTypes.UPLOAD_REQUEST,
});
export const uploadMediaSuccess = () => ({
  type: UploadTypes.UPLOAD_SUCCESS,
});
export const uploadMediaError = message => ({
  type: UploadTypes.UPLOAD_ERROR,
  payload: message,
});

export const uploadMedia = ({ file, type, title }) => {
  return async function uploadMediaThunk(dispatch) {
    const token = await auth.getCurrentUserToken();

    if (!token) {
      return dispatch(signOutSuccess());
    }

    dispatch(uploadMediaRequest());
    try {
      const mediaUrl = await mediaUpload(file);
      const { data: response } = await api.uploadMedia(
        {
          Authorization: `Bearer ${token}`,
        },
        { media: mediaUrl, type, title },
      );

      if (response.error) {
        return dispatch(uploadMediaError(response.error));
      }

      return dispatch(uploadMediaSuccess());
    } catch (error) {
      return dispatch(uploadMediaError(error.message));
    }
  };
};
