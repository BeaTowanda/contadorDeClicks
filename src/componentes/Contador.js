import React from 'react';
import '../hojasDeEstilo/Contador.css'


function Contador({ numeroDeClicks }) {
    return (
        <div className='contador' >
            { numeroDeClicks }
        </div>
    )

}
export default Contador;