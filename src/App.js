import React from 'react'
import {Footer, Blog, Posssibility, Features, WhatGPT3,Header, Possibility} from './containers'
import {Cta, Brand, Navbar} from './components'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
