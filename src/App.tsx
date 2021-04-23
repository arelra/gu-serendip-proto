import React, { useState } from 'react'
import './App.css'
import { Content } from './ContentReactMasonry'
import { Layout } from './Layout'
import { Logo } from './Logo'
import articles from "./data-02.json";
import { ArticleViewer } from './ArticleViewer'

function App() {

  return (
    <div className="App">
      <Layout>
        <Logo />
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
