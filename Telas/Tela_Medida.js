import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import estilo from '../CSS/estilo';

const Tela_Medida = () => {
  const [valor, setValor] = useState('');
  const [medidaOrigem, setMedidaOrigem] = useState('KM');
  const [medidaDestino, setMedidaDestino] = useState('M');
  const [resultado, setResultado] = useState(null);

  const taxas_Cambio = {
    KM: { M: 1000 },
    M: { KM: 0.001 },
  };

  const Converter_Medida = () => {
    const Num_valor = parseFloat(valor);

    if (Num_valor > 0) {
      const taxa = taxas_Cambio[medidaOrigem][medidaDestino];
      const valor_Convertido = Num_valor * taxa;
      setResultado(valor_Convertido.toFixed(2));
    } else {
      setResultado(null);
    }
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Conversor de Medidas</Text>
      <TextInput
        style={estilo.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Picker
        selectedValue={medidaOrigem}
        style={estilo.picker}
        onValueChange={(itemValue) => setMedidaOrigem(itemValue)}
      >
        <Picker.Item label="Quilômetro (KM)" value="KM" />
        <Picker.Item label="Metro (M)" value="M" />
      </Picker>

      <Picker
        selectedValue={medidaDestino}
        style={estilo.picker}
        onValueChange={(itemValue) => setMedidaDestino(itemValue)}
      >
        <Picker.Item label="Quilômetro (KM)" value="KM" />
        <Picker.Item label="Metro (M)" value="M" />
      </Picker>

      <Button title="Converter" onPress={Converter_Medida} />
      {resultado !== null && (
        <Text style={estilo.resultado}>
          {`Valor em ${medidaDestino}: ${resultado} ${medidaDestino}`}
        </Text>
      )}
    </View>
  );
};

export default Tela_Medida;