import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import estilo from '../CSS/estilo';

const Tela_IMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const numPeso = parseFloat(peso);
    const numAltura = parseFloat(altura);

    if (numPeso > 0 && numAltura > 0) {
      const imc = numPeso / (numAltura * numAltura);
      setResultado(imc.toFixed(2));
    } else {
      setResultado(null);
    }
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) return 'Muito Abaixo do Peso';
    if (imc < 24.9) return 'Peso Ideal';
    if (imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Calculadora de IMC</Text>

      <TextInput
        style={estilo.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={estilo.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular IMC" onPress={calcularIMC} />
      {resultado && (
        <Text style={estilo.resultado}>
          {`O seu IMC é ${resultado} e você está com ${classificarIMC(parseFloat(resultado))}`}
        </Text>
      )}
    </View>
  );
};

export default Tela_IMC;