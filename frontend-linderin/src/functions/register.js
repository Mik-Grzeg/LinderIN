import { Navigate } from "react-router-dom";


async function register(data) {
  if (data["password"] !== data["repPassword"]) {
    return <Navigate to="/register"/>;
  } else {
    fetch("http://localhost:8080/api/register", {
      method: "POST",
      //mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data["email"],
        password: data["password"],
        first_name: data["first_name"],
        last_name: data["last_name"],
        city: data["city"],
        description: data["description"],
        recruiter_role: data["recruiter_role"],
      }),
    }).then((e)=>{if(e.status === 201){return <Navigate to="/login"/>} else {return <Navigate to="/register"/>}});
  }
}

export default register;
