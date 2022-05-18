
import './App.css';
import Botton from './componentes/Botton';
import Contador from './componentes/Contador'

import freeCodeCampLogo from './imagenes/freeCodeCamp.png';
import {useState} from 'react';


function App() {
  const [numeroDeClicks,setNumClicks] = useState(0);

  {/* TRABAJANDO HOOKS */}
  const manejarClick = () =>{
    setNumClicks (numeroDeClicks + 1);
  
  }
  const reiniciarContador = () =>{
    setNumClicks(0);
    
  }
  return (
    <div className='App'>
      <div className = 'freecodecamp-logo-contenedor' >
        <img
        className='freecodecamp-logo' 
        src={freeCodeCampLogo} 
        alt ='Logo de Freecodecamp'
        />
      </div>
      <div className='contenedor-principal' >
        <Contador numeroDeClicks={numeroDeClicks}/>
        <Botton 
        texto = 'Click'
        esBotonDeClick = {true}
        manejarClick ={manejarClick}
        />
        <Botton
         texto = 'Reiniciar'
         esBotonDeClick = {false}
         manejarClick ={reiniciarContador}
         />

      </div>
    </div>
  );
}

export default App;
