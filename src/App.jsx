import './App.css'
import Home from './pages/Home/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

const routers = (
  <BrowserRouter>
    <Routes>
      <Route path='/dashboard' exact element={<Home />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/signUp' exact element={<SignUp />} />
  </Routes>
  </BrowserRouter>
)

function App() {

  return (
    <div>
      {routers}
    </div>
  )
}

export default App
