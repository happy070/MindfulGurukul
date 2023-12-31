import React from 'react';
import './App.css';
import Header from './MyComponents/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './MyComponents/login'; 
import Signup from './MyComponents/Signup';
import Dashboard from './MyComponents/Dashboard';
import Home from './MyComponents/Home';
import AddUsers from './MyComponents/AddUsers';
import About from './MyComponents/About'
import AllUsers from './MyComponents/AllUsers';
import EditUser from './MyComponents/EditUser';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path='/AddUsers' element={<AddUsers />} />
          <Route path="/edit/:userId" element={<EditUser />} />
          <Route path='/AllUsers' element={<AllUsers />} />
          <Route path='/About' element={<About />} />
          <Route path='/logout' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
