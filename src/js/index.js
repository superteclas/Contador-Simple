//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include bootstrap npm library into the bundle
import 'bootstrap';

import './icons.js';

//include your index.scss file into the bundle
import '../styles/index.css';

//funcion de los props (10% sirve para decirle que ese siempre entre el 10 y el 0)

function Contador(props){
    return (<div className="Contador">
       
        <div className="calendar">
            <i className="far fa-clock"></i>
        </div>
        
        <div className="cuatro">{props.digitFour % 10}</div>
        
        <div className="tres">{props.digitThree % 10}</div>
        
        <div className="dos">{props.digitTwo % 10}</div>
        
        <div className="uno">{props.digitOne % 10}</div>
    
    </div>);
}

//especificar que cada propiedad es un numero

Contador.propTypes = {
  
   digitCuatro: PropTypes.number,
  
   digitTres: PropTypes.number,
  
   digitDos: PropTypes.number,
  
   digitUno: PropTypes.number
};


// Intervalo del contador en milisegundos y renderizado en el div app

let counter = 0;

setInterval(function(){
    const cuatro = Math.floor(counter/1000);
    const tres = Math.floor(counter/100);
    const dos = Math.floor(counter/10);
    const uno = Math.floor(counter/1);
    
    counter++;
    
    ReactDOM.render(<Contador digitOne={uno} digitTwo={dos} digitThree={tres} digitFour={cuatro}/>,
        
    document.querySelector('#app')
    
    );
},1000); 

// con este último numero pordría cambiar la velocidad del contador 