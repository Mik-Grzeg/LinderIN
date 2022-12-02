import React from 'react';
import { Card, Form, FormGroup, Label, Input,Container, Button } from "reactstrap"

class RegisterPage extends React.Component {
    render(){
        return (
            <div className="Auth-form-container">
            <Form className="Auth-form">
                <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
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
                <div className="d-grid gap-2 mt-3">
                    <Button type="submit" className="btn">
                    Submit
                    </Button>
                </div>
                <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
            </Form>
            </div>
        )
    }
}

export default RegisterPage