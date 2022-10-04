import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Ho from './component/Ho';
 import Cont from './component/Cont';
import Stud from './component/Stud';
import Emp from './component/Emp';



function App() {
  return (
    <div>
       <BrowserRouter> 
        <Routes>
          <Route path='/' element = {<Ho/>} ></Route> 
           <Route path='/Stud' element = {<Stud/>} ></Route> 
          <Route path='/Cont' element = {<Cont/>} ></Route> 
          <Route path='/Emp' element={<Emp/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;