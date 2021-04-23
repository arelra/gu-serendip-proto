import React, { useState } from 'react'
import './App.css'
import { Content } from './ContentReactMasonry'
import { Layout } from './Layout'
import { Sidebar } from './Sidebar'
import articles from "./data-02.json";

const App = () => {
  const [showTitles, setShowTitles] = useState(true);
  return (
    <div className="App">
      <Layout>
        <Sidebar
          showTitles={showTitles}
          setShowTitles={() => setShowTitles(!showTitles)}
        />
        <Content
          articles={articles}
          stacking="left, top"
          numberOfBoxes={100}
          showTitles={showTitles}
        />
      </Layout>
    </div>
  )
}

export default App
