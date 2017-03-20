Promise.resolve([1,2,3,4,5,6,7,8,9,10])
	.then(data => data.filter(item => item % 2 == 0))
	.then(data => data.reduce((item, ac) => ac += item))
	.then(console.log)
	.catch(console.error)
	