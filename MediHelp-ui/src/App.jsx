import { useState } from 'react'
import './App.css'
import Banner from "./components/banners";
import LandingPage from './components/landingpage';
import Footer from './components/footer';

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
}

export default App
