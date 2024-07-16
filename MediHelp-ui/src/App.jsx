import { useState } from 'react'
import './App.css'
import Banner from "./components/banners";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Banner />
      </div>
      
      <p className='text-red-600'>Testing</p>
      
    </>
  )
}

export default App
