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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/dashboard");
        } catch (err) {
          setError(err.message);
        }
      };
    
      const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
          await signInWithPopup(auth, provider);
          navigate("/dashboard");
        } catch (err) {
          setError(err.message);
        }
      };

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
                <Form.Control size="lg" type="email" placeholder="Email*" onChange={(e) => setEmail(e.target.value)} required/>
                <Form.Control size="lg" type="password" placeholder="Password*" onChange={(e) => setPassword(e.target.value)} required/>
            </Form>
            <Button variant="primary" type="submit" size="lg">Login</Button>
            <Button variant="outline-success" size="lg" onClick={handleGoogleSignIn}>Login with Google</Button>
            <Button variant="outline-info" size="lg" onClick={handleFaceBookSignIn}>Login with FaceBook</Button>
            <Button variant="link" size="lg" onClick={() => navigate("/register")}>Register</Button>
            {error && (<Alert variant="danger">{error}</Alert>)}
        </div>
    );
}

export default Login;