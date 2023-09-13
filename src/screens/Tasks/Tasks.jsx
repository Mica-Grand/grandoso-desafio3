import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const Tasks = ({ category, tasks, onTaskSelect }) => {
  const filteredTasks = tasks.filter((task) => task.category === category);

  return (
    <View>
      <Text>List of Tasks in {category}</Text>
      <FlatList
        data={filteredTasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onTaskSelect(item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Tasks;
