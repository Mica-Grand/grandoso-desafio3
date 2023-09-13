import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ onSelectCategory }) => {
  return (
    <View>
      <Text>List of Categories</Text>
      <TouchableOpacity onPress={() => onSelectCategory('Personal')}>
        <Text>Personal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelectCategory('Trabajo')}>
        <Text>Trabajo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
