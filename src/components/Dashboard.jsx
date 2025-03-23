import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    return (
        <div className="d-grid gap-3">
            <h4>Dashboard</h4>
            <h5>Welcome</h5>
            <Button variant="danger" type="submit" size="lg">Log out</Button>
        </div>
    );
}

export default Dashboard;