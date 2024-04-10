import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const photo = await photoPromise;
    const user = await userPromise;

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}