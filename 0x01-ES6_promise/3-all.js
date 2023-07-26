import { uploadPhoto, createUser } from './utils';

const uploadPhotoVar = uploadPhoto();
const createUserVar = createUser();

/*
export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;

  return uploadPhoto().then((data) => {
    body = data.body;
    return createUser();
  }).then((data) => {
    firstName = data.firstName;
    lastName = data.lastName;
    console.log(body, firstName, lastName);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
*/

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;
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
}
