import React from 'react'
import './App.css'
import { Content } from './ContentReactMasonry'
import { Layout } from './Layout'
import { Logo } from './Logo'

function App() {
  return (
    <div className="App">
      <Layout>
        <Logo />
        <Content stacking="left, top" numberOfBoxes={100} />
      </Layout>
    </div>
  )
}

export default App
