import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Error from "../../pages/Error/Error"
import Footer from "../Footer/Footer"

export default function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <Routes>
          <Route path="/jacquesverpoest/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}
