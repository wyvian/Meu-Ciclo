import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import { Cores } from '../../assets/Cores';

const Opcao = ({cor, tamanho, icone, nivel}) => {

  const [corFundo, setCorFundo] = useState(Cores.branco);
  const [corIcone, setCorIcone] = useState(cor);

  function preencher () {
    if(corFundo == cor){
      setCorFundo(Cores.branco);
      setCorIcone(cor)
    }else{
      setCorFundo(cor);
      setCorIcone(Cores.branco);
    }
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity 
        style={[styles.opcao(cor), {backgroundColor: corFundo}]} 
        onPress={preencher}>
        <MaterialCommunityIcons name={icone} size={tamanho} color={corIcone} />
      </TouchableOpacity>

      <Text style={styles.labelOpcao}>{nivel}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  opcao: cor => ({
    width: 120,
    height: 120,
    borderRadius: 20,
    borderWidth: 7.5,
    borderColor: cor,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: Cores.branco,
  }),
  labelOpcao: {
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold'
  }
})

export default Opcao;