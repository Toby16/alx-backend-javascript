#!/usr/bin/node

// a simple promise that smulates data fetching
const fetchData = new Promise((resolve, reject) => {
	// simulation data fetching
	setTimeout(() => {
		const data = { id: 1, name: "John Doe" };

		// simulating success, we call the resolve with the data
		resolve(data);
	}, 2000); // simulate delay of 2 seconds
});

// a second promise to be chained with the first asynchronous operation
const fetchUserData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const user = { id: 1, name: "John Doe", age: 35 };
			resolve(user);
		}, 1500); // simulate delay of 1.5 seconds
	});
};

// a third promise to be chained along with the first and second asynchronous operation
const thirdData = (user) => {
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			const anotherUserData = { ...user, email: "johndoe@example.com" };
			resolve(anotherUserData);
		}, 2000); // simulate delay of 2 seconds
	});
};


// consuming the promise
fetchData.then((data) => {
	console.log("Data Fetched Successfully:", data);
	return fetchUserData(); // chaining another asynchronous operation
}).then((user_data) => {
	console.log("User Data fetched Successfully:", user_data);
	return thirdData(user_data); // chaining another asynchronous operation
}).then((thirdUserData) => {
	console.log("Another data Fetched Successfully:", thirdUserData);
}).catch((error) => {
	console.log("Error Occurred Fetching Data:", error.message);
});
