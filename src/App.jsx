import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Calender from './Calender';
import Todo from'./components/Todo';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Calender' element={<Calender/>}/>
      </Routes>
    </Router>
   
    <Todo/>
    </>
  );
}

export default App;
