import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Zocial from 'react-native-vector-icons/Zocial'; // importando fonts(icons)
Icon.loadFont();
EvilIcons.loadFont();
Zocial.loadFont(); // importante chama a essa função

import {Container, TextLabel} from './styles';

export default function Login() {
  return (
    <Container>
      <TextLabel>Home</TextLabel>
      {/* icones */}
      <Icon name="home" size={30} color="#FFF" />
      <TextLabel>Pointer</TextLabel>
      <EvilIcons name="pointer" size={30} color="#FFF" />
      <TextLabel>Apple</TextLabel>
      <Zocial name="appstore" size={30} color="#FFF" />
      <TextLabel>Windows</TextLabel>
      <Zocial name="windows" size={30} color="#FFF" />
      <TextLabel>Skype</TextLabel>
      <Zocial name="skype" size={30} color="#FFF" />
    </Container>
  );
}
