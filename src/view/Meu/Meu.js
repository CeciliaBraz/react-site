import React from 'react';
import './meu.css';

const Meu = props => {
  return (
    <div class="Relogio">
      <p>Relógio Simples, é necessário mudar a hora diretamente no <i>código</i>, não atualiza automaticamente!</p>
      <Relogio />
    </div>
  );
};

function Hora(props){
  return(
    <div>
      <p>20 Horas e</p>
    </div>
  )
}
function Minutos(props){
  return(
    <div>
      <p>25 Minutos</p>
    </div>
  )
}

function Relogio(props){
  return(
    <div>
      <Hora />
      <Minutos />
    </div>
  );
};

export default Meu;