import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Error from "../../pages/Error/Error"
import Footer from "../Footer/Footer"

export default function Router() {
  return (
    <React.StrictMode>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </React.StrictMode>
  )
}
