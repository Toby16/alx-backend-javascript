
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
/*
// function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise !== undefined) {
      // console.log('Got a response from the API');
      resolve({ status: 200, body: 'success' });
    } else {
      // console.log('Got a response from the API');
      reject(new Error());
    }
    console.log('Got a response from the API');
  });
*/
}

/*
handleResponseFromAPI.then((data) => {
  console.log("Got a response from the API");
}).catch((error) => {
  console.log(error.message);
});
*/

/*
const promise = Promise.resolve();
handleResponseFromAPI();
*/
