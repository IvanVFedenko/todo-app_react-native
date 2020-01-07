import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export const CreateTodo = props => {
  const [todo, setTodo] = useState('');

  const handleInput = e => {
    setTodo(e.replace(/[^ \wа-яА-ЯІіЇїЁё]/g, ''));
  };

  const call = () => {
    const { call } = props;
    call({
      todo: todo,
      id: Date.now(),
      completed: false,
      activeFilter: 'All',
    });
    resetState();
  };
  const resetState = () => {
    setTodo('');
  };
  return (
    <View>
      <View
        style={{
          borderBottomWidth: 0.5,
          height: 60,
        }}>
        <TextInput
          style={{ height: 60, elevation: 12 }}
          placeholder="Type here to add the new todo!"
          onChangeText={value => handleInput(value)}
          value={todo}
          returnKeyType="go"
          onSubmitEditing={() => todo.length > 0 && call()}
        />
      </View>
    </View>
  );
};
