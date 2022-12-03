async function login(credentials){
    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": credentials['email'],
            "password": credentials['password']
        })
    })
    .then()
}

export default login;