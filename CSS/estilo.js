import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF1DB',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  butao: {
    gridgap: '5px 8px',
    backgroundColor: '#859F3D',
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