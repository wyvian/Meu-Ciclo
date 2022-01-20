import { StyleSheet, SafeAreaView } from 'react-native';

import { Cores } from '../assets/Cores';
import { Icones } from '../assets/Icones';
import Categorias from './components/Categorias';
import OpcaoContainer from './components/OpcaoContainer';
import Semana from './components/Semana';

function TelaDia() {
  return (
    <SafeAreaView style={styles.background}>
      
      <Semana primeiraData={15}/>
      
      <Categorias/>

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
  }
})

export default TelaDia;