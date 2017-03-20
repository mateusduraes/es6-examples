const getDataFromApi = new Promise((resolve, reject) => {
	if(true){
		resolve({name: 'Mateus', lastname: 'Durães'})
	} else {
		reject('Error')
	}	
})


getDataFromApi
	.then(console.log)
	.catch(console.log)


console.log('Its async')