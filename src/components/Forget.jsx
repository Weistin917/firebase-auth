import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { auth } from "../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Forget() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleSendEmail = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            navigate("/");
        } catch (err) {
            console.log("Error sending password reset email: ", err);
        }
    }

    return (
        <div className="d-grid gap-3">
            <h4>Reset Password</h4>
            <Form style={{width: "100%" }} onSubmit={handleSendEmail}>
                <Form.Group className="mb-3">
                <Form.Control size="lg" type="email" placeholder="Email*" onChange={(e) => setEmail(e.target.value)} required/>
                </Form.Group>
                <div className="d-grid">
                    <Button variant="primary" type="submit" >Send reset email</Button>
                </div>
            </Form>
            <Button variant="link" size="md" onClick={() => navigate("/")}>Back to Login</Button>
        </div>
    );
}

export default Forget;