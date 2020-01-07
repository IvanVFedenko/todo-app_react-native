import React from 'react';
import { View } from 'react-native';
import { TodoItem } from './todoItem';

export const TodosList = props => {
  const { handleComplete, handleDelete, displayedTodos } = props;
  return (
    <View>
      {displayedTodos.map((item, i) => (
        <TodoItem
          key={item.id}
          item={item}
          i={i}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </View>
  );
};
