import { uploadPhoto, createUser } from './utils';

const uploadPhotoVar = uploadPhoto();
const createUserVar = createUser();

export default function handleProfileSignup() {
  /*
  let body;
  let firstName;
  let lastName;
  */

  return Promise.all([uploadPhotoVar, createUserVar])
    .then((data) => {
      console.log(data[0].body, data[1].firstName, data[1].lastName);
    }).catch(() => {
      console.log('Signup system offline');
    });

  /*
  return uploadPhotoVar.then((data) => {
    body = data.body;
    return createUserVar;
  }).then((data) => {
    firstName = data.firstName;
    lastName = data.lastName;
    console.log(body, firstName, lastName);
  }).catch(() => {
    console.log('Signup system offline');
  });
  */
}

// handleProfileSignup();
