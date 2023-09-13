import React from 'react';
import { View, Text } from 'react-native';

const Details = ({ task }) => {
  return (
    <View>
      <Text>Task Details</Text>
      <Text>Title: {task.title}</Text>
      {/* Ver cómo hacer para que el usuario pueda agregar detalles: como fecha, etc, y boton para eliminar o marcar completada? */}
    </View>
  );
};

export default Details;