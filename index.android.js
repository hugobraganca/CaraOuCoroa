import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';
import Resultado from './src/components/Resultado';

export default class CaraOuCoroa extends Component {
  render() {
    return (
      <Router>
        <Scene>
          <Scene key='principal' component={Principal} initil title='Cara ou Coroa'/>
          <Scene key='sobrejogo' component={SobreJogo} title='Sobre' />
          <Scene key='outrosjogos' component={OutrosJogos} title='Outros Jogos'/>
          <Scene key='resultado' component={Resultado} title='Resultado'/>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('CaraOuCoroa', () => CaraOuCoroa);
