import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Cores } from './Cores';

const Dia = ({diaSemana, dataMes}) => {
  return (
    <View style={styles.diaContainer}>
      <Text style={styles.dia_letra}>{diaSemana}</Text>
      
      <View style={styles.dataContainer}>
        <Text style={styles.data_num}>{dataMes}</Text>
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
  },
  dataContainer: {
    width: '100%',
    height: 45,
    backgroundColor: Cores.cinza,
    borderRadius: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  data_num: {
    position: 'absolute',
    bottom: 2,
    right: 6,
  }
})

export default Dia;
