import React from 'react'
import './App.css'
import { Content } from './ContentReactMasonry'
import { Layout } from './Layout'
import { Sidebar } from './Sidebar'
import articles from "./data-02.json";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Sidebar />
        <Content
          articles={articles}
          stacking="left, top"
          numberOfBoxes={100}
        />
      </Layout>
    </div>
  )
}

export default App
