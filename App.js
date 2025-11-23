// Pag:
import login from "./components/pags/login"
import pagamento from "./components/pags/pagamento"
import loja from "./components/pags/loja"
import redefinir_senha from "./components/pags/redefinir_senha"
import Produto from "./components/pags/Produto"
import menu from "./components/pags/menu"
import sobre_nos from "./components/pags/sobre_nos"
// Navegação de pag:
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, TextInput, Pressable, ImageBackground, Modal} from "react-native";
import style from "./components/pags/style";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="Loja">
        <Stack.Screen name="Menu" component={menu} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={login} options={{headerShown:false}}/>
        <Stack.Screen name="Redefinir Senha" component={redefinir_senha} options={{headerShown:false}}/>
        <Stack.Screen name="Sobre nós" component={sobre_nos}  options={{headerShown:false}}/>
        <Stack.Screen name="Loja" component={loja} options={{headerShown:false}}/>        
        <Stack.Screen name="Pagamento" component={pagamento}  options={{headerShown:false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

