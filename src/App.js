import React from 'react'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <main className='app'>
      <h1 className='invisible text-center position-absolute'>Weather App</h1>
      <Sidebar />
    </main>
  )
}

export default App

