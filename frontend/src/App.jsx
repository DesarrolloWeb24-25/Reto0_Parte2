import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Realizamos los importes de los componentes correspondientes, en este caso los creados para los Videojuegos
import ShowVideojuegos from './components/ShowVideojuegos.jsx';
import CreateVideojuego from './components/CreateVideojuego.jsx';
import EditVideojuego from './components/EditVideojuego.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowVideojuegos/>} />
          <Route path='/create' element={ <CreateVideojuego/>} />
          <Route path='/edit/:id' element={ <EditVideojuego/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;