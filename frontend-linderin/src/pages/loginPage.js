import React from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import Footer from '../components/Footer';

class RegisterPage extends React.Component {
  render() {
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
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                  />
                </FormGroup>
              </Col>
            </Row>
            <div className="d-grid gap-2 mt-3">
              <Button type="button" className="btn btn-lblue">
                Login
              </Button>
            </div>
            {/* TODO : Think about it*/}
            {/* <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">password?</a>
                </p> */}
          </div>
        </Form>
				<Footer />
      </div>
    );
  }
}

export default RegisterPage;
