import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sports from './components/sports';
import Categories from './components/categories';
import Signup from './components/signup';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import Math from './components/math';
import Computers from './components/computers';
import Art from './components/art';
import Vehicles from './components/vehicles';
import Mythology from './components/mythology';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path='/categories' element={<Categories />} />
            <Route path='/math' element={<Math />} />
            <Route path='/sports' element={<Sports />} />
            <Route path='/computers' element={<Computers />} />
            <Route path='/art' element={<Art/>} />
            <Route path='/vehicles' element={<Vehicles />} />
            <Route path='/mythology' element={<Mythology />} />
          </Route>

          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
