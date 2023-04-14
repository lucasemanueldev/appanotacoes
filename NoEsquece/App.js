import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {

    const [estado,setarEstado] = useState('leitura');
    const [anotacao,setarAnotacao] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim posuere mollis. Aliquam odio justo, auctor at dapibus laoreet, dignissim id nisi. Nullam tempor fringilla purus, sed porttitor ipsum lobortis id. Suspendisse commodo fringilla varius. Nulla cursus felis sit amet nibh maximus, quis tempor velit dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce et libero fermentum, rutrum tortor nec, pulvinar mauris. Praesent leo mauris, egestas nec enim iaculis, lacinia auctor ante. Sed dictum scelerisque tincidunt.');    

    if(estado == 'leitura'){
    return(
      <View style={styles.viewGeral}>
        <StatusBar hidden/>
        <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>nãoEsquece!</Text></View>
        
        <View style={{padding:20}}><Text style={styles.anotacao}>{anotacao}</Text></View>

        <TouchableOpacity onPress={()=> setarEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoTexto}>+</Text></TouchableOpacity>
      </View>
      
    )
    }else if(estado == 'atualizando'){
      return(
      <View style={styles.viewGeral}>
        <StatusBar hidden/>
        <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>nãoEsquece!</Text></View>
        
        

        <TouchableOpacity onPress={()=> setarEstado('leitura')} style={styles.btnSalvar}><Text style={{textAlign:'center',color:'white'}}>Salvar</Text></TouchableOpacity>
      </View>
      );
    }

}


const styles = StyleSheet.create({
      header:{
        width: '100%',
        padding: 15,
        backgroundColor: '#300053'
      },
      anotacao:{
        fontSize:14,
        color: '#ffffe0',
        fontStyle: 'italic'
      },
      btnAnotacao:{
        position:'absolute',
        right:20,
        bottom:20,
        width:50,
        height:50,
        backgroundColor:'#300053',
        borderRadius:25
      },
      btnAnotacaoTexto:{
        color:'white',
        position:'relative',
        textAlign:'center',
        top: 3,
        fontSize:30
      },
      btnSalvar:{
        position:'absolute',
        right:20,
        bottom:20,
        width:100,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#300053',
      },
      viewGeral: {
        backgroundColor: '#111',
        width: '100%',
        height: '100%',
      },
});