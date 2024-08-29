<<<<<<< HEAD

import { useState } from 'react'
import './App.css'
import Banner from "./components/banners";
import LandingPage from './components/landingpage';
import Footer from './components/footer';
=======
import { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import BadPage from './pages/BadPage';
<<<<<<< HEAD
>>>>>>> 21d0380 (Routing start completed)

import { useState } from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import IssueForm from './components/Login/IssueForm';

import Login from "./pages/Login";
import BadPage from './pages/BadPage';
=======
>>>>>>> 3550b99 (Fetched External API data)
import MainPage from './pages/MainPage';

function App() {

  return (
<<<<<<< HEAD

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
=======
>>>>>>> 21d0380 (Routing start completed)
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/register" element={<Register />}/>
          <Route path="/MainPage" element={<MainPage />}/>
          <Route path="/Admin" element={<AdminPage />}/>
          <Route path="/users/:id" element={<UserView/>}/>
          <Route path="/users/edit/:id" element={<UserEdit/>}/>
          <Route path="/about" element={<AboutUsPage/>}/>
=======
>>>>>>> 21d0380 (Routing start completed)
=======
          <Route path="/MainPage" element={<MainPage />}/>
>>>>>>> 3550b99 (Fetched External API data)
          <Route path="*" element={<BadPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
<<<<<<< HEAD

=======
)
>>>>>>> 21d0380 (Routing start completed)
}

export default App
