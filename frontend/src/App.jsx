import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Auth from './pages/Auth'
import Home from './pages/Home'
import PrivateRoute from './Private route/PrivateRoute'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/register' element={<Auth registerPage/>}/>
      <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
    </Routes>
    </>
  )
}

export default App
