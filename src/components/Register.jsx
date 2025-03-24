import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="d-grid gap-3">
            <h4>Register</h4>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Control size="lg" type="email" placeholder="Email*" onChange={(e) => setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control size="lg" type="password" placeholder="Password*" onChange={(e) => setPassword(e.target.value)} required/>
                </Form.Group>
                <div className="d-grid">
                    <Button variant="primary" type="submit" >Register</Button>
                </div>
            </Form>
            <Button variant="link" size="md" onClick={() => navigate("/")}>Already have an acount? Login</Button>
            {error && (<Alert variant="danger">{error}</Alert>)}
        </div>
    );
}

export default Register;