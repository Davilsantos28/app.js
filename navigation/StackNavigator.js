import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela_Home from '../Telas/Tela_Home';
import Tela_IMC from '../Telas/Tela_IMC';
import Tela_Medida from '../Telas/Tela_Medida';
import Tela_Moeda from '../Telas/Tela_Moeda';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Inicio" component={Tela_Home} />
      <Stack.Screen name="IMC" component={Tela_IMC} />
      <Stack.Screen name="Medida" component={Tela_Medida} />
      <Stack.Screen name="Moeda" component={Tela_Moeda} /> 
    </Stack.Navigator>
  );
}