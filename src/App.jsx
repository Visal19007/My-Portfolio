import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import HomePage from './Home/HomePage'
import Aurora from '../reactbits/Aurora/Aurora'
import Particles from '../reactbits/Particles/Particles'
import { div } from 'motion/react-client'

function App() {


  return (
    <div>
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
      <div className=' absolute top-0 flex justify-center items-center w-full'>
        <HomePage/>
      </div>
      
      </div>

      <section id='whatido' className='text-black  bg-gray flex justify-center items-center'>
        <div className='w-[80%] mt-20 h-screen'>
          <b >Project <br /><h2 className='text-2xl'>What I do</h2></b>
          <div className=' w-full flex justify-center items-center '>
            <div className='flex flex-wrap justify-center gap-6 p-5 mx-auto max-w-6xl'>
              <div className='bg-white mt-5 w-70 h-50 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex items-center justify-center'>
                box1
              </div>
              <div className='bg-white mt-5 w-70 h-50 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex items-center justify-center'>
                box2
              </div>
              <div className='bg-white mt-5 w-70 h-50 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex items-center justify-center'>
                box3
              </div>
              <div className='bg-white mt-5 w-70 h-50 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex items-center justify-center'>
                box4
              </div>
              <div className='bg-white mt-5 w-70 h-50 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex items-center justify-center'>
                box5
              </div>
              <div className='bg-white mt-5 w-70 h-50 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex items-center justify-center'>
                box6
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
    
  )
}

export default App
