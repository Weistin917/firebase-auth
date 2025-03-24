// Login page
import React, { useState } from "react";
import { 
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider
 } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    /* React states
     * email: stores the entered email address
     * password: stores the entered password
     * error: stores the error message if any has occured
     * */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // async function to handle Email-Password authentication
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/dashboard");
        } catch (err) {
          setError(err.message);
        }
    };
    
    // async function to handle Google authentication
    const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
        navigate("/dashboard");
    } catch (err) {
        setError(err.message);
    }
    };

    // async function to handle Facebook authentication
    const handleFaceBookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
        await signInWithPopup(auth, provider);
        navigate("/dashboar");
    } catch (err) {
        setError(err.message);
    }
    }

    return (
        <div className="d-grid gap-3">
            <h4>Login</h4>
            <Form style={{width: "100%" }} onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    {/* Sets the email each time it's changed */}
                    <Form.Control size="lg" type="email" placeholder="Email*" onChange={(e) => setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    {/* Sets the password each time it's changed */}
                    <Form.Control size="lg" type="password" placeholder="Password*" onChange={(e) => setPassword(e.target.value)} required/>
                </Form.Group>
                <div className="d-grid">
                    <Button variant="primary" type="submit" >Login</Button>
                </div>
            </Form>
            <Button variant="outline-success" size="lg" onClick={handleGoogleSignIn}>Login with Google</Button>
            <Button variant="outline-info" size="lg" onClick={handleFaceBookSignIn}>Login with FaceBook</Button>
            <div className="d-flex mb-2 justify-content-between">
                <Button variant="link" size="lg" onClick={() => navigate("/register")}>Register</Button>
                <Button variant="link" size="lg" onClick={() => navigate("/forgetPassword")}>Forgot Password?</Button>
            </div>
            {error && (<Alert variant="danger">{error}</Alert>)}
        </div>
    );
}

export default Login;