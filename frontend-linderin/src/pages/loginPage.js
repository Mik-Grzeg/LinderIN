import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

async function login_user(credentials) {
  fetch("http://localhost:8080/api/login", {
    method: "POST",
    //mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credentials["email"],
      password: credentials["password"],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("userName", credentials["email"]);
    });
}

function LoginPage() {
  const navigate = useNavigate();

  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await login_user({
      email: mail,
      password: password,
    });
			navigate("/landing")
  };

  return (
    <div className="Auth-form-container">
      <Form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign in</h3>
          <Row>
            <Col>
              <FormGroup className="mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  id="email"
                  onChange={(e) => setMail(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <div className="d-grid gap-2 mt-3">
            <Button
              type="button"
              className="btn btn-lblue"
							onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
        </div>
      </Form>
      <Footer />
    </div>
  );
}

export default LoginPage;
