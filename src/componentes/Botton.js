import React from 'react';
import '../hojasDeEstilo/Botton.css'

{/* esBotonDeClick es true o false */}
function Botton({ texto, esBotonDeClick,manejarClick }) {
return(
	<button
		className ={ esBotonDeClick? 'botonDeClick':'botonDeReinciar' }
		onClick={manejarClick} >
		{texto}
	</button>
)
}
export default Botton;
