import React from 'react';
import { StyleSheet, View } from 'react-native';

import Dia from './Dia';

const diasSemana = ['D','S','T','Q','Q','S','S'];

const Semana = ({primeiraData}) => {

  function gerarDias () {
    const semana = [];
  
    for(let d = 0; d < 7; d++){
      semana.push(
        {
          id: d,
          data: (primeiraData + d),
          nome: diasSemana[d]
        }
      )
    }
    return (semana);
  }
  
  const semana = gerarDias();

  return (
    <View style={styles.semana} elevation={5}>

      {semana.map((dia) => {
        return <Dia key={dia.id} diaSemana={dia.nome} dataMes={dia.data} />
      })}

    </View>
  )
};

const styles = StyleSheet.create({
  semana: {
    width: '100%',
    height: 175,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    paddingBottom: 10,
    shadowColor: 'gray',
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 10,
      width: 100
    }
  }
})

export default Semana;