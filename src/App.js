import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Register from './components/register/Register';
import './background.css'
import './app.scss'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Register/>} path='/register'/>
        <Route element={<Contact/>} path='/contact'/>
      </Routes>
    </div>
  );
}

export default App;