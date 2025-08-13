import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';


export default function App() {

  const nome = 'Henrique';
  const idade = 31;


  return (
    <View style= {styles.content} >
    <Image style = {styles.logo} source = {require('./src/img/images.webp')} />
      <Text  style= {styles.textos}>
        Estou com sono sou {nome} tenho {idade}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex:1, 
    justifyContent: 'center', 
    alignItems:'center', 
    backgroundColor: 'purple'

  },
  textos:{
    color: 'red',
    fontSize: 25
  }, 
  logo: {
    width: '300',
    height: '300' 
  }
});
