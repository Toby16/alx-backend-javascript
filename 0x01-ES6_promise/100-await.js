import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let obj = {};

  try {
    const uploadPhotoVar = await uploadPhoto();
    const createUserVar = await createUser();
    obj = { photo: uploadPhotoVar, user: createUserVar };
  } catch (error) {
    obj = { photo: null, user: null };
  }
  return obj;
}
