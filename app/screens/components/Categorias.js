import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import { Cores } from '../../assets/Cores';
import { Icones } from '../../assets/Icones';

const Categorias = () => {

  const [ativa, setAtiva] = useState("Sangue");

  return (

    <View style={styles.container}>

      <View style={styles.containerBotoes}>

        
        <TouchableOpacity 
          onPress={() => setAtiva("Sangue")} 
          style={[styles.botoesCategoria, {backgroundColor: ativa === "Sangue"? Cores.sangueSelecionado : Cores.branco, borderColor: Cores.sangue}]}>

          <MaterialCommunityIcons name={Icones.sangue} size={40} color={Cores.sangue} />
        
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => setAtiva("Dor")} 
          style={[styles.botoesCategoria, {backgroundColor: ativa === "Dor"? Cores.dorSelecionado : Cores.branco, borderColor: Cores.dor} ]}>
        
          <MaterialCommunityIcons name={Icones.dor} size={40} color={Cores.dor} />
        
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => setAtiva("Humor")}
          style={[styles.botoesCategoria, {backgroundColor: ativa === "Humor"? Cores.humorSelecionado : Cores.branco, borderColor: Cores.humor}]}>
          <MaterialCommunityIcons name={Icones.humor} size={40} color={Cores.humor} />
        </TouchableOpacity>
      </View>
        
      {/* alterar esse texto baseado na categoria selecionada */}
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