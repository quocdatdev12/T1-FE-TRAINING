import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponents from './components/Mycomponents'
import Header from './components/Header'
import { Banner } from './components/Banner'
import { SectionServices } from './components/services/SectionServices'
import { Categories } from './components/ListCategories/Categories'
import { Bestseller } from './components/Bestseller'

function App() {

  return (
    <div className='wrap'>
      <Header />
      <main>
        <Banner />
        <SectionServices/>
        <Categories/>
        <Bestseller/>
      </main>
    </div>
  )
}

export default App
