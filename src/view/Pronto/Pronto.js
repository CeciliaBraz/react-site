import React from 'react';
import ThemedDigitalClock from 'themed-digital-clock';
import './pronto.css'

const Pronto = props => {
  return (
    <div class="Pronto">
      <p>Tema pronto, link para acessar: <i>https://www.npmjs.com/package/themed-digital-clock</i></p>

      <spam class="Tema"><ThemedDigitalClock /></spam>
    </div>
  );
};

export default Pronto;