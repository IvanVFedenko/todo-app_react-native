import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export const Footer = props => {
  const { filter } = props;
  return (
    <View style={styles.filters}>
      <TouchableOpacity
        style={styles.width}
        name="all"
        onPress={() => {
          props.handleFilterAll();
        }}>
        <View
          style={{
            borderRightWidth: 0.7,
            height: 30,
            justifyContent: 'center',
          }}>
          <Text style={filter === 'All' ? styles.activeText : styles.text}>
            All
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.width}
        onPress={() => {
          props.handleFilterActive();
        }}>
        <View
          style={{
            borderRightWidth: 0.7,
            height: 30,
            justifyContent: 'center',
          }}>
          <Text style={filter === 'active' ? styles.activeText : styles.text}>
            Active
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.width}
        onPress={() => {
          props.handleFilterCompleted();
        }}>
        <View>
          <Text
            style={filter === 'completed' ? styles.activeText : styles.text}>
            Completed
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
