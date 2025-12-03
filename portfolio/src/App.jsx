import { useState } from 'react'
import './App.css'
import ProfilePicture from './profilePicture'
import ProfileCard from './ProfileCard'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'

function App() {
  
  return (
    <>
      <div className='hero'>
        <ProfileCard/>
      </div>
      <div className='about-me'>
        <AboutMe/>
      </div>
      <div className='technical-skills'>
        <Skills/>
      </div>
      <div className='projects'>
        <Projects/>
      </div>
      <footer>
        
        <div>
          <a href='https://www.linkedin.com/in/mark-frangainho-38543b294/'>Linked In</a>
          <a href='https://github.com/Mark-Frangainho'>GitHub</a>
          <h6>© 2025 Mark Frangainho - Built with React & Vite</h6>
        </div>

      </footer>
    </>  
  )
}

export default App
