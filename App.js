import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import TelaDia from './app/screens/TelaDia';
import TelaFluxo from './app/screens/TelaFluxo';
import TelaDor from './app/screens/TelaDor';
import TelaTPM from './app/screens/TelaTPM';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dia" component={TelaDia}/>
        <Stack.Screen name="Fluxo" component={TelaFluxo}/>
        <Stack.Screen name='Dor' component={TelaDor} />
        <Stack.Screen name='TPM' component={TelaTPM} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
