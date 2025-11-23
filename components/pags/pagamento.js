import {View, Text, TextInput, Pressable, Image, Modal} from "react-native";
import {Component} from "react";
import style from "./style";
import Lista_produtos from "./ArquivosGlobais/Lista_produtos"
import Lista_usuario from "./ArquivosGlobais/Lista_usuario"

export default class pagamento extends Component{
state = {


}

render(){
  return (
    <View style = {style.view}>
<View style = {style.menu}>
          <View style = {style.botao_home}>
           <Text style={style.text_input}>Olá, {this.state.obj}</Text>
         <Pressable style={style.botoes} 
         onPress={() => this.props.navigation.navigate("Login")}>
           <Text style={style.botoes_text}>Home</Text>
          </Pressable>
          </View>
         <Pressable style={style.botoes} onPress={() => this.props.navigation.navigate("Menu", {pagAnterior: "Loja"} )}>
           <Text style={style.botoes_text}>Menu</Text>
          </Pressable>
  </View>
  </View>   )
}
}