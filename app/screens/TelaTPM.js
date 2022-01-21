import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import { Cores } from '../assets/Cores';
import { Icones } from '../assets/Icones';

import Semana from './components/Semana';
import OpcaoContainer from './components/OpcaoContainer';

function TelaFluxo() {
  return (
    <SafeAreaView style={styles.background}>
      
      <Semana primeiraData={15}/>

      <Text style={styles.titulo}>TPM</Text>
      
      <OpcaoContainer icone={Icones.tpm} cor={Cores.tpm}/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: Cores.cinza,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    letterSpacing: 5,
    marginTop: 20,
    color: Cores.tpm,
    //backgroundColor: Cores.sangueSelecionado
  }
})

export default TelaFluxo;