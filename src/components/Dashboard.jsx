// Dashboard
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Dashboard() {
    const navigate = useNavigate();
    const user = auth.currentUser; // gets the current user information

    // async function to handle the logout process
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (err) {
            console.error("Error logging out: ", err);
        }
    };

    return (
        <div className="d-grid gap-3">
            <h4>Dashboard</h4>
            <h5>Welcome, {user?.email}!</h5> {/* gets the user's email address */}
            <Button variant="danger" onClick={handleLogout} size="lg">Log out</Button>
        </div>
    );
}

export default Dashboard;