import React from 'react'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import Home from './pages/Home'

export default function App() {
  return (
    <div>
      <header>
            <NavBar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  )
}
