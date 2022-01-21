import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView } from 'react-native';

import { Cores } from '../assets/Cores';

import Categorias from './components/Categorias';
import Semana from './components/Semana';

function TelaDia({route}) {

  const data = new Date(route.params.dateString);

  return (
    <SafeAreaView style={styles.background}>
      
      <Semana primeiraData={(data.getUTCDate() - data.getUTCDay())} dataSelecionada={data.getUTCDate()} />
      
      <Categorias data={data}/>
      
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