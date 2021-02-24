// Add your code here


// fetch(`http://localhost:3000/users`, {
// 	method: "POST",
// 	headers: {
// 	  "Content-Type": "application/json",
// 	  "Accept": "application/json",
// 	}
//   });

function submitData( name, email ) {
	return fetch( 'http://localhost:3000/users', {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		  "Accept": "application/json"
		},
		body: JSON.stringify( {
		  name,
		  email
		} )
	  } )
	  
	   	.then(function(response) {
	  		return response.json();
	  	})
		.then(function(object) {
			document.body.innerHTML = object.id
		
	  	})
	  	.catch(function(error) {
	  		// alert("Bad things! Ragnarők!");
			  document.body.innerHTML = error.message;
	  	});
}
  

// function submitData(name, email) {
	
// 	let configObj = {
// 		headers: {
// 			"Content-Type": "application/json",
// 			"Accept": "application/json"
// 		},
// 		body: JSON.stringify({name,email})
// 	};

// 	return fetch("http://localhost:3000/users", configObj)




	
	
	
// } 