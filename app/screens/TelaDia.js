import { StyleSheet, SafeAreaView } from 'react-native';

import { Cores } from '../assets/Cores';

import Categorias from './components/Categorias';
import Semana from './components/Semana';

function TelaDia() {
  return (
    <SafeAreaView style={styles.background}>
      
      <Semana primeiraData={15}/>
      
      <Categorias/>
      
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