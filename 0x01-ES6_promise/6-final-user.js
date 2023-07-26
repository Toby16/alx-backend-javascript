import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserVar = signUpUser(firstName, lastName);
  const uploadPhotoVar = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserVar, uploadPhotoVar])
    .then((data) => {
      data.map((body) => ({
        status: body.status,
        value: body.status === 'fulfilled' ? body.value : String(body.reason),
      }));
    });
}

// let value = handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");
// console.log(value);
