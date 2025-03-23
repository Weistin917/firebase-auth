import React from "react";
import { Form, Button } from "react-bootstrap";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function Forget() {
    return (
        <div className="d-grid gap-3">
            <h4>Reset Password</h4>
            <Form style={{width: "100%" }}>
                <Form.Control size="lg" type="email" placeholder="Email*" required/>
            </Form>
            <Button variant="primary" type="submit" size="lg">Send reset email</Button>
            <Button variant="link" size="md">Back to Login</Button>
        </div>
    );
}

export default Forget;