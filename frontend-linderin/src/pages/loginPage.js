import React, {useState} from "react";
import login from "../functions/login";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";

function LoginPage(){
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
    return (
      <div className="Auth-form-container">
        <Form className="Auth-form">
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
                    onChange={(e)=>setMail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <div className="d-grid gap-2 mt-3">
              <Button type="button" className="btn btn-lblue" onClick={()=>login({'email':mail,'password':password})}>
                Login
              </Button>
            </div>
            {/* TODO : Think about it*/}
            {/* <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">password?</a>
                </p> */}
          </div>
        </Form>
      </div>
    );
  }


export default LoginPage;
