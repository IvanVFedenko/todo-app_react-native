import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, StatusBar } from 'react-native';
import { Header, Footer, TodosList } from './components';
import { CreateTodo } from './containers/';
import { styles } from './styles/styles';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const saveToAsyncStorage = async todos => {
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
  };

  const getFromStorage = async () => {
    const todos = await AsyncStorage.getItem('todos');
    const data = JSON.parse(todos);
    if (Array.isArray(data)) {
      saveTodos(data);
    }
  };

  useEffect(() => {
    getFromStorage();
  }, []);

  const call = n => {
    const newT = [...todos, n];
    saveTodos(newT);
  };

  const saveTodos = todos => {
    saveToAsyncStorage(todos);
    setTodos(todos);
  };

  const handleToggleCompleting = id => {
    saveTodos(
      todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      }),
    );
  };

  const handleDelete = todoId => {
    saveTodos(todos.filter(todo => todo.id !== todoId));
  };

  const handleFilterAll = () => {
    setFilter('All');
  };

  const handleFilterActive = () => {
    setFilter('active');
  };

  const handleFilterCompleted = () => {
    setFilter('completed');
  };

  const filterTodos = filter => {
    if (filter === 'active') {
      return todos.filter(todo => !todo.completed);
    }

    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    }
    return todos;
  };

  const displayedTodos = filterTodos(filter);
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <Header />
        <CreateTodo call={call} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.list}>
          <View>
            <TodosList
              todos={todos}
              handleComplete={handleToggleCompleting}
              handleDelete={handleDelete}
              displayedTodos={displayedTodos}
            />
          </View>
        </ScrollView>
        <View>
          <Footer
            filter={filter}
            handleFilterAll={handleFilterAll}
            handleFilterActive={handleFilterActive}
            handleFilterCompleted={handleFilterCompleted}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
