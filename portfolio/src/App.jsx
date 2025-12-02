import { useState } from 'react'
import './App.css'
import ProfilePicture from './profilePicture'
import ProfileCard from './ProfileCard'
import AboutMe from './AboutMe'

function App() {
  
  return (
    <>
      <div className='hero'>
        <ProfileCard/>
      </div>
      <div className='about-me'>
        <AboutMe/>
      </div>
    </>  
  )
}

export default App
