import React from 'react'

import { Sidebar, FrontPage } from './components'
import useGlobalContext from './context'
import Spinner from './components/Spinner'

const App = () => {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='w-100 app__flex' style={{ height: "100vh" }}>
        <Spinner message="Wait for a while..." />
      </div>
    )
  }

  return (
    <main className='app d-flex'>
      <h1 className='invisible text-center position-absolute'>Weather App</h1>
      <Sidebar />
      <FrontPage />
    </main>
  )
}

export default App

