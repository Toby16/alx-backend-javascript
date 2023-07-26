export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
}
// console.log(signUpUser('Bob', 'Dylan'));
