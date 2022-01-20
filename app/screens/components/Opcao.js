import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import { Cores } from './Cores';

const Opcao = ({cor, tamanho, icone}) => {

  const [corFundo, setCorFundo] = useState('');

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
    <TouchableOpacity 
      style={[
        styles.opcoes(cor), 
        {backgroundColor: corFundo}]} 
      onPress={preencher}>
      <MaterialCommunityIcons name={icone} size={tamanho} color={corIcone} />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  opcoes: cor => ({
    width: 120,
    height: 120,
    borderRadius: 20,
    borderWidth: 7.5,
    borderColor: cor,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: Cores.branco,
  })
})

export default Opcao;