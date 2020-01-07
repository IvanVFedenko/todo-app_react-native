import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { styles } from '../styles/styles';

export const TodoItem = props => {
  const { handleComplete, item, handleDelete } = props;
  return (
    <View style={styles.horisontal}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View>
          <CheckBox
            value={!item.completed ? false : true}
            tintColors={{ true: 'gray', false: 'gray' }}
            onValueChange={() => {
              handleComplete(item.id);
            }}
          />
        </View>
        <View>
          <Text style={!item.completed ? styles.position : styles.completed}>
            {item.todo}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          handleDelete(item.id);
        }}>
        <View style={styles.delButton}>
          <Text
            style={{
              fontSize: 20,
              color: 'brown',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            x
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
