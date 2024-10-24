import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import estilo from '../CSS/estilo';


const Tela_Moeda = () => {
  const [valor, setValor] = useState('');
  const [moedaOrigem, setMoedaOrigem] = useState('USD');
  const [moedaDestino, setMoedaDestino] = useState('EUR');
  const [resultado, setResultado] = useState(null);

  const taxas_Cambio = {
    USD: { EUR: 0.85, BRL: 5.71 },
    EUR: { USD: 1.18, BRL: 6.15 },
    BRL: { USD: 0.19, EUR: 0.16 },
  };

  const Converter_Moeda = () => {
    const Num_valor = parseFloat(valor);

    if (Num_valor > 0) {
      const taxa = taxas_Cambio[moedaOrigem][moedaDestino];
      const valor_Convertido = Num_valor * taxa;
      setResultado(valor_Convertido.toFixed(2));
    } else {
      setResultado(null);
    }
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Conversor de Moeda</Text>
      <TextInput
        style={estilo.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Picker
        selectedValue={moedaOrigem}
        style={estilo.picker}
        onValueChange={(itemValue) => setMoedaOrigem(itemValue)}
      >
        <Picker.Item label="Dólar (USD)" value="USD" />
        <Picker.Item label="Euro (EUR)" value="EUR" />
        <Picker.Item label="Real (BRL)" value="BRL" />
      </Picker>

      <Picker
        selectedValue={moedaDestino}
        style={estilo.picker}
        onValueChange={(itemValue) => setMoedaDestino(itemValue)}
      >
        <Picker.Item label="Dólar (USD)" value="USD" />
        <Picker.Item label="Euro (EUR)" value="EUR" />
        <Picker.Item label="Real (BRL)" value="BRL" />
      </Picker>

      <Button title="Converter" onPress={Converter_Moeda} />
      {resultado !== null && (
        <Text style={estilo.resultado}>
          {`Valor em ${moedaDestino}: ${moedaDestino === 'BRL' ? 'R$' : moedaDestino === 'USD' ? '$' : '€'} ${resultado}`}
        </Text>
      )}
    </View>
  );
};

export default Tela_Moeda;