import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// 
const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<Layout />} >
        <Route path="" element={<Home />} />
        <Route path="About" element={< About/>} />
        <Route path="Contact" element={<Contact />} />
        <Route path="User/:Userid" element={<User/>} />
        <Route path="Github" element={<Github />} />
   </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
