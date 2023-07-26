export default function handleResponseFromAPI(promise) {
// function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      console.log('Got a response from the API');
      resolve({ status: 200, body: 'success' });
    } else {
      reject(new Error());
    }
  });
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
handleResponseFromAPI(promise);
*/