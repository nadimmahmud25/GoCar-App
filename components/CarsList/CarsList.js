import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CarItem from "../CarItem";

import Styles from './Styles';
import Cars from './Cars';

const CarsList = (props) => {
  return (
    <View style={Styles.container}>
      <FlatList
        data={Cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;