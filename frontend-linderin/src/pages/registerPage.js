import React from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import Footer from '../components/Footer';

class RegisterPage extends React.Component {
  render() {
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
                <FormGroup className="mt-3">
                  <label>Repeat password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
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
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <label>Surname</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter surname"
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter city"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup className="mt-3">
                  <Label for="exampleSelect">Select</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Worker</option>
                    <option>Recruiter</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
            </Row>
            <div className="d-grid gap-2 mt-3">
              <Button type="button" className="btn btn-lblue">
                Register
              </Button>
            </div>
          </div>
        </Form>
				<Footer />
      </div>
    );
  }
}

export default RegisterPage;
