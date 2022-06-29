
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie/:id' element={<SingleMovie/>}></Route>
     
      </Routes>
      </BrowserRouter>
  );
}

export default App;
