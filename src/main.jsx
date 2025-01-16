import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import SignUp from "./Pages/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
      </Routes>
  </BrowserRouter>
  </StrictMode>,
)
