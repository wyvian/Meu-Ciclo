import React from 'react';
import { StyleSheet, View } from 'react-native';

import Opcao from './Opcao';

var i = 1;
const tamanhos = [];
const OpcaoContainer = ({cor, icone}) => {
  
  for(i; i <= 4; i++){
    tamanhos.push(
      {
        id: i, 
        valor: (i*20 + 20)
      }
    )
  }

  //console.log(tamanhos);

  return (
    <View style={styles.opcoesContainer}>
      {tamanhos.map((item) => {
        return <Opcao key={item.id} cor={cor} tamanho={item.valor} icone={icone}/>
      })}
    </View>
  )
};

const styles = StyleSheet.create({
  opcoesContainer: {
    width: '100%',
    height: 400,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
})

export default OpcaoContainer;