import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  Row,
  Nav,
} from "reactstrap";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

async function register_user(data) {
  if (data["password"] !== data["repPassword"]) {
    console.log("not same password");
    return false;
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
				img_uri: "smth"
      }),
    }).then((e) => {
      if (e.status === 201 || e.status === 200) {
        console.log(e.status);
        console.log("udalo sie");
        return true;
      } else {
        console.log(" nie udalo sie");
        return false;
      }
    });
  }
}

function RegisterPage() {
  const navigate = useNavigate();

  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [repPassword, setRepPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [surname, setSurname] = useState();
  const [city, setCity] = useState();
  const [role, setRole] = useState();
  const [desc, setDesc] = useState();
	const [img_uri, setImgUri] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await register_user({
      email: mail,
      password: password,
      repPassword: repPassword,
      first_name: firstName,
      last_name: surname,
      city: city,
      description: desc,
      recruiter_role: role,
			img_uri: img_uri
    });
    if (resp === true) {
			console.log("powinien zmienic strone")
      navigate("/register");
    } else {
			console.log("nie powinien zmienic strone")
      navigate("/login");
    }
  };

  return (
    <div className="Auth-form-container">
      <Form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign up</h3>
          <Row>
            <Col>
              <FormGroup className="mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  onChange={(e) => setMail(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mt-3">
                <label>Repeat password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={(e) => setRepPassword(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mt-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mt-3">
                <label>Surname</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter surname"
                  onChange={(e) => setSurname(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mt-3">
                <label>City</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter city"
                  onChange={(e) => setCity(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="mt-3">
                <Label for="exampleSelect">Select</Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  onChange={(e) => {
                    if (e.target.value === "Worker") {
                      setRole(false);
                    } else {
                      setRole(true);
                    }
                  }}
                >
                  <option>Worker</option>
                  <option>Recruiter</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input
                id="exampleText"
                name="text"
                type="textarea"
                onChange={(e) => setDesc(e.target.value)}
              />
            </FormGroup>
          </Row>
          <div className="d-grid gap-2 mt-3">
            <Button onClick={handleSubmit} className="btn btn-lblue">
              Register
            </Button>
          </div>
        </div>
      </Form>
      <Footer />
    </div>
  );
}

export default RegisterPage;
