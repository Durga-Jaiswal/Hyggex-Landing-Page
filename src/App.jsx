import { useState } from 'react'
import HomePage  from './components/HomePage'
import  Navbar  from './components/Navbar'
import Card from "./components/Card"
import FAQSection from './components/FAQSection'
function App() {
 

  return (
    <>
      <Navbar/>
      <HomePage/>
      <Card/>
      <FAQSection/>
    </>
  )
}

export default App;
