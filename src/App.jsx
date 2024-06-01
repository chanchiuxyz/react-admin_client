// import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Login from './pages/login/login';
import Admin from './pages/admin/admin'


// import {Button} from 'antd'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        {/* Routes instead of Switch in react-router v6 */}
          <Routes>
              <Route path='/login' Component={Login}></Route>
              <Route path='/' Component={Admin}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
