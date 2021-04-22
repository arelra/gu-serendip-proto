import React from 'react'
import './App.css'
import Layout from './Layout'
import { Logo } from './Logo'

function App() {
  return (
    <div className="App">
      <Layout>
        <Logo />
        <div>Content</div>
      </Layout>
    </div>
  )
}

export default App
