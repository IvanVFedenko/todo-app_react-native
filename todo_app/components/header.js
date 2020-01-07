import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import CardView from 'react-native-cardview';

export const Header = () => {
  return (
    <CardView cardElevation={12} cardMaxElevation={20} cornerRadius={0}>
      <View elevation={0} style={styles.viewStyle}>
        <Text style={styles.textStyle}>Todo app</Text>
      </View>
    </CardView>
  );
};
