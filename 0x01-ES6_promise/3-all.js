import { uploadPhoto, createUser } from './utils';

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
  }).catch((error) => { // eslint-disable-line
    console.log('Signup system offline');
  });
}
