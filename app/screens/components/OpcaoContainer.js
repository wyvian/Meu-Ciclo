import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

//import Opcao from './Opcao';
import { Cores } from '../../assets/Cores';

const OpcaoContainer = ({cor, icone, categoria, dataString}) => {

  const [dados, setDados] = useState({})
  const [isLoading, setLoading] = useState(true);
  const [marcada, setMarcada] = useState('')
  const [mudancas, setMudancas] = useState({})

  const [corFFraca, setCorFFraca] = useState(Cores.branco);
  const [corFMod, setCorFMod] = useState(Cores.branco)
  const [corFForte, setCorFForte] = useState(Cores.branco)
  const [corFInt, setCorFInt] = useState(Cores.branco)

  const [corFraca, setCorFraca] = useState(cor);
  const [corMod, setCorMod] = useState(cor)
  const [corForte, setCorForte] = useState(cor)
  const [corInt, setCorInt] = useState(cor)

  const opcoes = {
    "FR" : 0,
    "MD" : 1,
    "FT" : 2,
    "IT" : 3 
  }

  function trocarFundo (corAtual) {
    if (corAtual == cor) {
      return Cores.branco
    } else {
      return cor
    }
  }

  function trocarIcone (corAtual) {
    if (corAtual == Cores.branco) {
      return cor
    } else {
      return Cores.branco
    }
  }

  

  function preencher (index) {
    switch (index) {
      case 0:
        setCorFFraca(trocarFundo(corFFraca))
        setCorFraca(trocarIcone(corFraca))
        break;
      case 1:
        setCorFMod(trocarFundo(corFMod))
        setCorMod(trocarIcone(corMod))
        break;
      case 2:
        setCorFForte(trocarFundo(corFForte))
        setCorForte(trocarIcone(corForte))
        break;
      case 3:
        setCorFInt(trocarFundo(corFInt))
        setCorInt(trocarIcone(corInt))
        break;
      default:
        break;
    }
  }  

  function definirMarcado (dadosBD) {
    preencher(opcoes[dadosBD[categoria]])
  }

  const putAPI = async (intensidade) => {
    /*console.log("teste: " + {categoria:intensidade})
    const mudancas = {
        categoria:intensidade
    }*/
    console.log(categoria)
    try{
      console.log("fetch - >")
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({tipo_dor:"IT"})};
      const response = await fetch('https://diasapi.herokuapp.com/dias/' + dataString, requestOptions);
      const json = await response.json();

      definirMarcado(json)
    } catch (error) {
      console.error(error);
    }
  }


  const getAPI = async () => {
    try {
     const response = await fetch('https://diasapi.herokuapp.com/dias/' + dataString);
     const json = await response.json();
     setDados(json)
     definirMarcado(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

  function putPreencher(index, intensidade){
    console.log("putAPI - V")
    putAPI(intensidade)
    console.log("preencher - V")
    preencher(index)
  }

  useEffect(() => {
    getAPI();
  }, []);



  return ( // return de OpcaoContainer
    <View>
      {isLoading ? <ActivityIndicator/> : (
        <View style={styles.opcoesContainer}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              style={[styles.opcao(cor), {backgroundColor: corFFraca}]} 
              onPress={() => {putAPI("FR")}}>
              <MaterialCommunityIcons name={icone} size={40} color={corFraca} />
            </TouchableOpacity>
          
            <Text style={styles.labelOpcao}>Fraca</Text>
          </View>

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity 
              style={[styles.opcao(cor), {backgroundColor: corFMod}]} 
              onPress={() => {putAPI("MD")}}>
              <MaterialCommunityIcons name={icone} size={60} color={corMod} />
            </TouchableOpacity>

            <Text style={styles.labelOpcao}>Moderada</Text>
          </View>

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity 
              style={[styles.opcao(cor), {backgroundColor: corFForte}]} 
              onPress={() => {putAPI("FT")}}>
              <MaterialCommunityIcons name={icone} size={80} color={corForte} />
            </TouchableOpacity>

            <Text style={styles.labelOpcao}>Forte</Text>
          </View>

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity 
              style={[styles.opcao(cor), {backgroundColor: corFInt}]} 
              onPress={() => {putAPI("IT")}}>
              <MaterialCommunityIcons name={icone} size={100} color={corInt} />
            </TouchableOpacity>

            <Text style={styles.labelOpcao}>Intensa</Text>
          </View>
        </View>
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  opcoesContainer: {
    width: '100%',
    height: 400,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  opcao: cor => ({
    width: 120,
    height: 120,
    borderRadius: 20,
    borderWidth: 7.5,
    borderColor: cor,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  }),
  labelOpcao: {
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: Cores.preto,
  }
})

export default OpcaoContainer;