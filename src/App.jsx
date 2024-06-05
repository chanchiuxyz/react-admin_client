
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { useEffect } from 'react'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import LoginF from './pages/login/loginf'
import './App.css'


// import {Button} from 'antd'
function App() {
  useEffect(() => {
    return () => {
        localStorage.removeItem('user')
    }
  },[]
  )
  return (
    <div className="App" >
        <BrowserRouter>
        {/* Routes instead of Switch in react-router v6 */}
          <Routes>
              <Route path='/login' Component={Login}></Route>
              <Route path='/loginf' Component={LoginF}></Route>
              <Route path='/admin' Component={Admin}></Route>

              <Route path='/' Component={Admin}></Route>         
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
