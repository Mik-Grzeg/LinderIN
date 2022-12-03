async function login(credentials){
    fetch('http://localhost:8000/api/login', {
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
}

export default login;