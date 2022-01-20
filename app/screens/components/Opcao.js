import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import { Cores } from './Cores';

const Opcao = ({cor, tamanho, icone}) => {
  return (
    <TouchableOpacity style={styles.opcoes(cor)}>
      <MaterialCommunityIcons name={icone} size={tamanho} color={cor} />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  opcoes: cor => ({
    width: 140,
    height: 140,
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