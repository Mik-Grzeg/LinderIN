async function login(credentials){
    console.log(JSON.stringify({
        "email": credentials['email'],
        "password": credentials['password']
    }))
    fetch('http://localhost:8080/api/login', {
        method: 'POST',
        //mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": credentials['email'],
            "password": credentials['password']
        })
    })
}

export default login;