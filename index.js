function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
        }),
    })
      .then((response) => response.json())
      .then((userObject) => { 
        //add the id of the userObject to the DOM
      document.body.append(userObject.id)
      })
      .catch((error) => { 
        //error.message append message to DOM
      document.body.append(error.message)
      })
  } 


