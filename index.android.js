import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


const logo = require('./src/imgs/logo.png');
const btnJogar = require('./src/imgs/botao_jogar.png');
const btnOutrosJogos = require('.src/imgs/outros_jogos.png');

export default class CaraOuCoroa extends Component {
  render() {
    return (
      <View>
        
        <View>
          <Image source={logo} />
          <Image source={btnJogar} />
        </View>

        <View>
          <Image source={btnOutrosJogos} />
        </View>

      </View>
    );
  }
}


AppRegistry.registerComponent('CaraOuCoroa', () => CaraOuCoroa);
