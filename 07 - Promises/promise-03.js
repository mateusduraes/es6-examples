Promise.resolve(7)
	.then(data => {
		console.log('Hello i want only even numbers')
		return data;
	})
	.then(data => data % 2 == 0)
	.then(data => {
		if(data){
			return data;
		} else {
			throw new Error('The number is not even')
		}
	})
	.then(data => console.log('The number is even'))
	.catch(err => console.log(`Oops, an error -> ${err}`))

// You can throw an error, test with the even and odd numbers.