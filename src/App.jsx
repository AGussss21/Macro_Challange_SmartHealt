import React from "react"
import Home from "./pages/Home"
import Sarapan from "./pages/Sarapan"
import Makansiang from "./pages/Makansiang"
import Makanmalam from "./pages/Makanmalam"
import Sandwichtelur from "./pages/sandwichtelur"
import Potatowedges from "./pages/Potatowedges"
import Saladsayur from "./pages/Saladsayur"
import Tumisbrokoli from "./pages/tumisbrokoli"
import Ayamteriyaki from "./pages/Ayamteriyaki"
import Ayamgoreng from "./pages/Ayamgoreng"
import Supkrim from "./pages/Supkrim"
import Chickenkatsu from "./pages/Chickenkatsu"
import Bihunkuah from "./pages/Bihunkuah"
import CatatanSehat from "./pages/Catatansehat"
import "./index.css"; // Pastikan impor file CSS
import Dashboard from "./pages/Dashboard"
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sarapan' element={<Sarapan/>}/>
          <Route path='/makansiang' element={<Makansiang/>}/>
          <Route path='/makanmalam' element={<Makanmalam/>}/>
          <Route path='/sandwichtelur' element={<Sandwichtelur/>}/>
          <Route path='/potatowedges' element={<Potatowedges/>}/>
          <Route path='/saladsayur' element={<Saladsayur/>}/>
          <Route path='/tumisbrokoli' element={<Tumisbrokoli/>}/>
          <Route path='/ayamteriyaki' element={<Ayamteriyaki/>}/>
          <Route path='/ayamgoreng' element={<Ayamgoreng/>}/>
          <Route path='/supkrim' element={<Supkrim/>}/>
          <Route path='/chickenkatsu' element={<Chickenkatsu/>}/>
          <Route path='/bihunkuah' element={<Bihunkuah/>}/>
          <Route path='/catatansehat' element={<CatatanSehat/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
          </BrowserRouter>
    )
}

export default App