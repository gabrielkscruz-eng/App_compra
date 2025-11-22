import {View, Text, TextInput, Pressable, Image, Modal} from "react-native";
import {Component} from "react";
import style from "./style";

export default class loja extends Component{
state = {
abrirMenu : false,

}

render(){
  return (
    <View style = {style.view}>
<View style = {style.menu}>
         <Pressable style={style.botoes} onPress={() => this.props.navigation.navigate("Menu", {pagAnterior: "Loja"} )}>
           <Text style={style.botoes_text}>Menu</Text>
          </Pressable>
  </View>  
  </View>  
  )
}
}