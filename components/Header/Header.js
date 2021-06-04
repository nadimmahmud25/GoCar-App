import React from 'react';
import {View, Image} from 'react-native';

import Styles from './Styles';

const Header = () => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.logo} source={require('../../assets/images/logo.png')} />
      <Image style={Styles.menu} source={require('../../assets/images/menu.png')} />
    </View>
  );
};

export default Header;