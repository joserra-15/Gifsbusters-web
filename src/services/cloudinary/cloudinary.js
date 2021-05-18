import axios from 'axios';

export async function mediaUpload(file) {
  const formData = new FormData();
  formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
  formData.append('file', file);
  formData.append('resource_type', 'image');

  const response = await axios.post(
    process.env.REACT_APP_CLOUDINARY_URL,
    formData,
  );
  return response.data.secure_url;
}
