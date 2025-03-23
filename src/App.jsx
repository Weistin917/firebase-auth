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
  let user = null;

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
