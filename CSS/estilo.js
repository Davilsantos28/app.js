import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  butao: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },

  texto_botao: {
    color: '#fff',
    fontSize: 16,
  },

  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default estilo;