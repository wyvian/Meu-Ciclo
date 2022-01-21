import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import { Cores } from '../../assets/Cores';
import { Icones } from '../../assets/Icones';

const Categorias = () => {

  const [ativa, setAtiva] = useState("");
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>

        <View style={styles.containerBotoes}>

          <TouchableOpacity 
            onPress={() => {setAtiva("Fluxo"), navigation.navigate('Fluxo')}}
            style={[styles.botoesCategoria, {backgroundColor: ativa === "Fluxo"? Cores.sangueSelecionado : Cores.branco, borderColor: Cores.sangue}]}>

            <MaterialCommunityIcons name={Icones.sangue} size={60} color={Cores.sangue} />
          
          </TouchableOpacity>

          <Text style={styles.labelCategoria}>Fluxo</Text>
          
          <TouchableOpacity 
            onPress={() => {setAtiva("Dor"), navigation.navigate('Dor')}} 
            style={[styles.botoesCategoria, {backgroundColor: ativa === "Dor"? Cores.dorSelecionado : Cores.branco, borderColor: Cores.dor} ]}>
          
            <MaterialCommunityIcons name={Icones.dor} size={60} color={Cores.dor} />
          
          </TouchableOpacity>

          <Text style={styles.labelCategoria}>Dor</Text>
          
          <TouchableOpacity
            onPress={() => {setAtiva("TPM"), navigation.navigate('TPM')}} 
            style={[styles.botoesCategoria, {backgroundColor: ativa === "TPM"? Cores.tpmSelecionado : Cores.branco, borderColor: Cores.tpm}]}>
            <MaterialCommunityIcons name={Icones.tpm} size={60} color={Cores.tpm} />
          </TouchableOpacity>

          <Text style={styles.labelCategoria}>TPM</Text>
        </View>
          
        
      </View>

      {/* <OpcaoContainer icone={Icones.sangue} cor={Cores.sangue}/> */}

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '92%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: Cores.preto,
  },
  containerBotoes: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    //backgroundColor: "lightcoral",
  },
  botoesCategoria: {
    backgroundColor: 'white',
    width: 170,
    height: 120,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 25,
  },
  labelCategoria: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    letterSpacing: 2,
    color: Cores.preto,
    //backgroundColor: Cores.diaSelecionado,
  },
})

export default Categorias;