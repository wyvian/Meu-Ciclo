import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Cores } from '../../assets/Cores';

const Dia = ({diaSemana, dataMes, selecionada}) => {

  return (
    <View style={styles.diaContainer}>
      <Text style={styles.dia_letra}>{diaSemana}</Text>
      
      <View style={
        [
          styles.dataContainer, 
          {backgroundColor: (selecionada === true) ? Cores.diaSelecionado : Cores.cinza,}
        ]}>
        <Text style={[{color: (selecionada === true) ? Cores.branco : Cores.preto,}]}>{dataMes}</Text>
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  diaContainer: {
    width: 45,
    height: 75,
    justifyContent: 'space-around',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  dia_letra: {
    padding: 2,
    color: Cores.preto,
  },
  dataContainer: {
    width: '100%',
    height: 45,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  data_num: {
    
  }
})

export default Dia;
