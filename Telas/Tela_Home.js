import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import estilo from '../CSS/estilo';

export default function Tela_Home({ navigation }) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Bem-vindo ao Conversor DM</Text>

      <TouchableOpacity style={estilo.butao} onPress={() => navigation.navigate('IMC')}>
        <Text style={estilo.texto_botao}>Conversor IMC</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={estilo.butao} onPress={() => navigation.navigate('Medida')}>
        <Text style={estilo.texto_botao}>Conversor de Medida</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilo.butao} onPress={() => navigation.navigate('Moeda')}>
        <Text style={estilo.texto_botao}>Conversor de Moeda</Text>
      </TouchableOpacity>

    </View>
  );
}