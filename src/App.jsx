import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Categories from './components/categories/Categories'
import Courses from './components/courses/Courses'
import Faqs from './components/faqs/Faqs'
import Textimonials from './components/textimonials/Textimonials'
import Footer from './components/footer/Footer'

const App = () => {
  return (
      <>
        <Navbar/>
        <Header/>
        <Categories/>
        <Courses/>
        <Faqs/>
        <Textimonials/>
        <Footer/>
      </>
  )
}

export default App
