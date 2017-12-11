import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Resultado from './components/Resultado';

const Rotas = () => (
    <Router>
    <Scene>
      <Scene key='principal' component={Principal} initil title='Cara ou Coroa'/>
      <Scene key='sobrejogo' component={SobreJogo} title='Sobre' />
      <Scene key='outrosjogos' component={OutrosJogos} title='Outros Jogos'/>
      <Scene key='resultado' component={Resultado} title='Resultado'/>
    </Scene>
  </Router>
);

export default Rotas;