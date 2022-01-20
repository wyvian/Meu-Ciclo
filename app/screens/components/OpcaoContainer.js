import React from 'react';
import { StyleSheet, View } from 'react-native';

import Opcao from './Opcao';

const OpcaoContainer = ({cor, icone}) => {
  const tamanhos = [];
  const niveis = ["Fraca", "Moderada", "Forte", "Intensa"]

  for(let i = 1; i <= 4; i++){
    tamanhos.push(
      {
        id: niveis[i - 1],
        valor: (i*20 + 20), 
      }
    )
  }

  return (
    <View style={styles.opcoesContainer}>
      {tamanhos.map((item) => {
        return <Opcao 
          key={item.id} 
          cor={cor} 
          tamanho={item.valor} 
          icone={icone}
          nivel={item.id}/>
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