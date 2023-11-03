import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Cardapio from './paginas/Cardapio';
import Pedidos from './paginas/Pedidos';



const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Cardapio" component={Cardapio} />
      <Stack.Screen name="Pedidos" component={Pedidos} />

      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

