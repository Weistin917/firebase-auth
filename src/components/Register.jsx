// Register page
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

function Register() {
    /* React states
     * email: stores the entered email address
     * password: stores the entered password
     * error: stores the error message if any has occured
     * */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verPassword, setVerPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // async function to handle the register api call
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
                    {/* Sets the email on every change */}
                    <Form.Control size="lg" type="email" placeholder="Email*" onChange={(e) => setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    {/* Sets the password on each change */}
                    <Form.Control size="lg" type="password" placeholder="Password*" onChange={(e) => setPassword(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    {/* Sets the password on each change */}
                    <Form.Control size="lg" type="password" placeholder="Enter the password again*" onChange={(e) => setVerPassword(e.target.value === password)} required/>
                </Form.Group>
                <div className="d-grid">
                    <Button variant="primary" type="submit" disabled={!verPassword}>Register</Button>
                </div>
            </Form>
            <Button variant="link" size="md" onClick={() => navigate("/")}>Already have an acount? Login</Button>
            {!verPassword && (<Alert variant="warning">Both passwords must be equal.</Alert>)}
            {error && (<Alert variant="danger">{error}</Alert>)}
        </div>
    );
}

export default Register;