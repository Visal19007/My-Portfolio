import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Particles from '../reactbits/Particles/Particles'




function App() {


  return (
    <div  style={{
      backgroundColor:'rgb(6, 0, 16)',
      colorScheme: 'light',
    }}>

    <Navbar/>
      <h1 className="text-3xl font-bold underline"></h1>
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
    
    </div>
  )
}

export default App
