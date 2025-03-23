import React, { useState } from "react";
import { 
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider
 } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div className="d-grid gap-3">
            <h4>Login</h4>
            <Form style={{width: "100%" }}>
                <Form.Control size="lg" type="email" placeholder="Email*" required/>
                <Form.Control size="lg" type="password" placeholder="Password*" required/>
            </Form>
            <Button variant="primary" type="submit" size="lg">Login</Button>
            <Button variant="outline-success" size="lg">Login with Google</Button>
            <Button variant="link" size="lg">Register</Button>

        </div>
    );
}

export default Login;