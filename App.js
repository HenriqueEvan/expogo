import { View, Text, StyleSheet } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style= {styles.content} >
      <Text  style= {styles.textos}>
        Estou com sono
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex:1, 
    justifyContent: 'center', 
    alignItems:'center', 
    backgroundColor: 'purple',

  },
  textos:{
    color: 'red',
    fontSize: 25
  }
});
