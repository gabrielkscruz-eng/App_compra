// Páginas
import Login from "./components/pags/login";
import Pagamento from "./components/pags/pagamento";
import Loja from "./components/pags/loja";
import RedefinirSenha from "./components/pags/redefinir_senha";
import Menu from "./components/pags/menu";
import SobreNos from "./components/pags/sobre_nos";

// Navegação
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Menu" 
          component={Menu} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Redefinir Senha" 
          component={RedefinirSenha} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Sobre nós" 
          component={SobreNos} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Loja" 
          component={Loja} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Pagamento" 
          component={Pagamento} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
