import { useState } from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import BadPage from './pages/BadPage';
import MainPage from './pages/MainPage';
import Register from './pages/Register';
import AdminPage from './pages/AdminPage';
import UserView from './pages/UserView';
import UserEdit from './pages/UserEdit';

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/MainPage" element={<MainPage />}/>
          <Route path="/Admin" element={<AdminPage />}/>
          <Route path="/users/:id" element={<UserView/>}/>
          <Route path="/users/edit/:id" element={<UserEdit/>}/>
          <Route path="*" element={<BadPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
)
}

export default App
