import {isMobile} from 'react-device-detect';

import logo from './logoumg.jpeg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Acceso a apliación Asistencia de Cursos</h2>
        <p>
          ¡Tu cuena ha sido confirmada!
        </p>
        {isMobile ? 
          <a
          className="App-link"
          href="wdcoursesapp://wdcourses/"
          rel="noopener noreferrer"
          >
            Abrir apliación Asistencia de Cursos
          </a>
          :
          null}
      </header>
    </div>
  );
}

export default App;
