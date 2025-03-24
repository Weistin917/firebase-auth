// Main React App. Manages the routing for the aplication.
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Forget from './components/Forget';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  /* React states
   * user: stores the current authenticated user. Used to determine whether to show the Dashboard or the Login page.
   * loading: stores whether the page is loading or not.
   */
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Keeps in check if the authentication state has changed or not, to set the react states.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={user ? <Dashboard /> : <Login />} />
        <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/" />} />
        <Route path='/forgetPassword' element={<Forget />} />
      </Routes>
    </Router>
  );
}

export default App;
