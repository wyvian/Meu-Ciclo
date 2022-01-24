import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import { Cores } from '../assets/Cores';
import { Icones } from '../assets/Icones';

import Semana from './components/Semana';
import OpcaoContainer from './components/OpcaoContainer';

function TelaDor({route}) {

  const data = new Date(route.params);

  return (
    <SafeAreaView style={styles.background}>
      
      <Semana primeiraData={(data.getUTCDate() - data.getUTCDay())} dataSelecionada={data.getUTCDate()} />

      <Text style={styles.titulo}>Dor</Text>
      
      <OpcaoContainer icone={Icones.dor} cor={Cores.dor} dataString={route.params} categoria="tipo_dor"/>
      
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
    color: Cores.dor,
    //backgroundColor: Cores.sangueSelecionado
  }
})

export default TelaDor;