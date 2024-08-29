
import { useState } from 'react'
import './App.css'
import Banner from "./components/banners";
import LandingPage from './components/landingpage';
import Footer from './components/footer';

import { useState } from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import IssueForm from './components/Login/IssueForm';

import Login from "./pages/Login";
import BadPage from './pages/BadPage';
import MainPage from './pages/MainPage';

function App() {

  return (

    <>
      <div>
        <Banner />
      </div>
      <div>
        <LandingPage/>
      </div>
      <div>
        <Footer />
      </div>
    
      
    </>
  )
    <div>
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
          <Route path="/about" element={<AboutUsPage/>}/>
          <Route path="*" element={<BadPage />}/>
        </Routes>
      </BrowserRouter>
    </div>

}

export default App
