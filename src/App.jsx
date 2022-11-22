import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import Beer from "./Beer"
import Contacto from "./Contacto"
function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/beer/:id" element={<Beer/>}/>
    <Route path='/contacto' element={<Contacto/>}/>
  </Routes>
  )
}

export default App
