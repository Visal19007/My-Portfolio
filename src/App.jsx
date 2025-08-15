import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import HomePage from './Home/HomePage'
import Aurora from '../reactbits/Aurora/Aurora'
import Particles from '../reactbits/Particles/Particles'

function App() {


  return (
    <div style={{backgroundColor:'rgb(6, 0, 16)',
      colorScheme: 'light',}} className='w-full h-screen relative'>

    <Navbar/>
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
    <div className='absolute top-5 flex justify-center items-center w-full'>
      <HomePage/>
    </div>
    </div>
  )
}

export default App
