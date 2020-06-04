import React from 'react';
import SignUpForm from './components/SignUpForm';
import NavBar from './components/NavBar'
import { Route } from "react-router-dom";
import Login from './components/Login'
import UsersList from './components/UsersList';
import PrivateRoutes from './components/PrivateRoute'
import './App.css';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Route exact path="/" component={Login} />
       <Route exact path="/register" component={SignUpForm} />
       <PrivateRoutes exact path="/users" component={UsersList} />
    </div>
  );
}

export default App;
