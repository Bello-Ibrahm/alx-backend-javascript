import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((items) => {
    const results = [];

    items.forEach((ele) => {
        if (ele.status === 'fulfilled') {
            results.push({ status: ele.status, value: ele.value });
        } else {
            results.push({ status: ele.status, value: `${ele.reason}` });
        }
    });
    return results
    });
}
