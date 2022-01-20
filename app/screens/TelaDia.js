import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  Text, 
  View, 
  TouchableOpacity, 
  TouchableHighlight 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import { Cores } from '../assets/Cores';
import OpcaoContainer from './components/OpcaoContainer';
import Semana from './components/Semana';
import { Icones } from '../assets/Icones';

function TelaDia() {
  return (
    <SafeAreaView style={styles.background}>
      
      <Semana primeiraData={15}/>
      
      <View style={styles.categoriaContainer}>

        <View style={styles.botoesCategoria}>
          <TouchableHighlight style={[styles.categoria, {backgroundColor: Cores.sangueSelecionado, borderColor: Cores.sangue}]}>
            <MaterialCommunityIcons name={Icones.sangue} size={40} color={Cores.sangue} />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.categoria, {borderColor: Cores.dor}]}>
            <MaterialCommunityIcons name={Icones.dor} size={40} color={Cores.dor} />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.categoria, {borderColor: Cores.humor}]}>
            <MaterialCommunityIcons name={Icones.humor} size={40} color={Cores.humor} />
          </TouchableHighlight>
        </View>
        
        {/* alterar esse texto baseado na categoria selecionada */}
        <Text style={styles.labelCategoria}>Sangramento</Text>
      </View>

      <OpcaoContainer icone={Icones.dor} cor={Cores.dor}/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: Cores.cinza,
  },
  botoesCategoria: {
    width: '100%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //backgroundColor: "red",
  },
  categoria: {
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
  categoriaContainer: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    //backgroundColor: Cores.preto,
  },
  labelCategoria: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: Cores.preto,
    //backgroundColor: Cores.diaSelecionado,
  },
})

export default TelaDia;