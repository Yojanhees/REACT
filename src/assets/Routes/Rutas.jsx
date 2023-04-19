import { Route, Routes } from "react-router-dom"
import { Menu } from "../Menu/Menu"

import { Home } from "../Home/Home"
import {Members} from "../Members/Members"

export function App() {
    return (
      <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/miembros" element={<Members />} />
      </Routes>
      </>
      
    )
  }