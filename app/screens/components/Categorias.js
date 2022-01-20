import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import { Cores } from '../../assets/Cores';
import { Icones } from '../../assets/Icones';

const Categorias = () => {

  const [ativa, setAtiva] = useState("Fluxo");

  return (

    <View style={styles.container}>

      <View style={styles.containerBotoes}>

        
        <TouchableOpacity 
          onPress={() => setAtiva("Fluxo")} 
          style={[styles.botoesCategoria, {backgroundColor: ativa === "Fluxo"? Cores.sangueSelecionado : Cores.branco, borderColor: Cores.sangue}]}>

          <MaterialCommunityIcons name={Icones.sangue} size={40} color={Cores.sangue} />
        
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => setAtiva("Dor")} 
          style={[styles.botoesCategoria, {backgroundColor: ativa === "Dor"? Cores.dorSelecionado : Cores.branco, borderColor: Cores.dor} ]}>
        
          <MaterialCommunityIcons name={Icones.dor} size={40} color={Cores.dor} />
        
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => setAtiva("TPM")}
          style={[styles.botoesCategoria, {backgroundColor: ativa === "TPM"? Cores.tpmSelecionado : Cores.branco, borderColor: Cores.tpm}]}>
          <MaterialCommunityIcons name={Icones.tpm} size={40} color={Cores.tpm} />
        </TouchableOpacity>
      </View>
        
      <Text style={styles.labelCategoria}>{ativa}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    //backgroundColor: Cores.preto,
  },
  containerBotoes: {
    width: '100%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //backgroundColor: "red",
  },
  botoesCategoria: {
    backgroundColor: 'white',
    width: 90,
    height: 90,
    borderWidth: 5,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  labelCategoria: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: Cores.preto,
    //backgroundColor: Cores.diaSelecionado,
  },
})

export default Categorias;