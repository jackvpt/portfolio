import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Creations from "../Creations/Creations"
import Error from "../../pages/Error/Error"
import Footer from "../Footer/Footer"

export default function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creations" element={<Creations />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}
