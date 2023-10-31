import React from 'react'
import Books from './components/Books'
  import Navbar from './components/Navbar'
  import { createBrowserRouter } from 'react-router-dom'
 import Footer from './components/Footer'

var appr
const App = () => {
  return (
    <div>
      <Navbar/>
      <Books/>
      <Footer/>
    </div>
  )
}

export default App
