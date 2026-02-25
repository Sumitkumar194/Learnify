
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import MainHeader from './shared/MainHeader/MainHeader'
import Login from './components/auth/Login/Login'
import Signup from './components/auth/Signup/Signup'

function App() {
  return (
    <>
    <MainHeader/>
     <Routes>
      <Route path='/dashboard' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
    </>
  )
}

export default App
