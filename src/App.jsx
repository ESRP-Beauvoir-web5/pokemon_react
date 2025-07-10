
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./templates/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './app.css'
import List from "./templates/pokemon/List"
import Single from "./templates/pokemon/ListItem"

function App() {
  return (
    <>
      <Header />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemon/list" element={<List />} />
            </Routes>
          </BrowserRouter>
        </main>
      <Footer />
    </>
  )
}

export default App
