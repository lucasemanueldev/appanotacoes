import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';

export default function App() {
  const [estado, setarEstado] = useState('leitura');
  const [anotacao, setarAnotacao] = useState('')

  useEffect(() => {
    (async () => {
      try{
        const anotacaoLer = await AsyncStorage.getItem('anotacao')
        setarAnotacao(anotacaoLer)
      }catch(error){

      }
    })();
  },[])

  salvarDados =  async() => {
    try{
      await AsyncStorage.setItem('anotacao',anotacao);
    }catch(error){

    }

    alert(' Sua anotação foi salva com sucesso! 😉')
  }

  function atualizarAnotacao() {
    setarEstado('leitura')
    salvarDados()
  }
  if (estado == 'leitura') {
    return (
      <View style={styles.viewGeral}>
        <StatusBar hidden />
        <View style={styles.header}><Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>nãoEsquece!</Text></View>
        {
          (anotacao != '') ?
            <View style={{ padding: 20 }}><Text style={styles.anotacao}>{anotacao}</Text></View>
            :
            <View style={{ padding: 20 }}><Text style={{ color: '#fff', opacity: 0.25 }}>Você ainda não anotou nada! 🙁</Text></View>
        }
        <TouchableOpacity onPress={() => setarEstado('atualizando')}
        style={styles.btnAnotacao}>
          {
            (anotacao == '')?
          <Text style={styles.btnAnotacaoTexto}>+</Text>
          :
          <Text style={{fontSize:12, textAlign:'center',marginTop:16, color:'#fff'}}>Editar</Text>
          }
          </TouchableOpacity>
      </View>
    )
  } else if (estado == 'atualizando') {
    return (
      <View style={styles.viewGeral}>
        <StatusBar hidden />
        <View style={styles.header}><Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>nãoEsquece!</Text></View>

        <TextInput autoFocus={true} style={styles.anotacao}
          onChangeText={(text) => setarAnotacao(text)} multiline={true} numberOfLines={5} value={anotacao}>
        </TextInput>

        <TouchableOpacity onPress={() => atualizarAnotacao()} style={styles.btnSalvar}><Text style={{ textAlign: 'center', color: 'white' }}>Salvar</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 15,
    backgroundColor: '#300053'
  },
  anotacao: {
    fontSize: 14,
    color: '#ffffe0',
    fontStyle: 'italic',
    textAlignVertical: 'top',
    height: 300,
    padding: 20
  },
  btnAnotacao: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    backgroundColor: '#300053',
    borderRadius: 25
  },
  btnAnotacaoTexto: {
    color: 'white',
    position: 'relative',
    textAlign: 'center',
    top: 3,
    fontSize: 30
  },
  btnSalvar: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: '#300053',
  },
  viewGeral: {
    backgroundColor: '#111',
    width: '100%',
    height: '100%',
  },
});