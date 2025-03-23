import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function Register() {
    return (
        <div className="d-grid gap-3">
            <h4>Register</h4>
            <Form style={{width: "100%" }}>
                <Form.Control size="lg" type="email" placeholder="Email*" required/>
                <Form.Control size="lg" type="password" placeholder="Password*" required/>
            </Form>
            <Button variant="primary" type="submit" size="lg">Register</Button>
            <Button variant="link" size="md">Already have an acount? Login</Button>
        </div>
    );
}

export default Register;