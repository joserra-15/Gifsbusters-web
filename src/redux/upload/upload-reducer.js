import { UploadTypes } from './upload-types';

const uploadInitialState = {
  isUploading: false,
  uploadError: null,
  uploadSucces: false,
};

export const UploadReducer = (state = uploadInitialState, action) => {
  switch (action.type) {
    case UploadTypes.UPLOAD_REQUEST: {
      return {
        ...state,
        isUploading: true,
        uploadError: null,
        uploadSucces: false,
      };
    }
    case UploadTypes.UPLOAD_ERROR: {
      return {
        ...state,
        isUploading: false,
        uploadError: action.payload,
        uploadSucces: false,
      };
    }
    case UploadTypes.UPLOAD_SUCCESS: {
      return {
        ...state,
        isUploading: false,
        uploadError: null,
        uploadSucces: true,
      };
    }

    default:
      return state;
  }
};
