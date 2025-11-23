import {View, Text, TextInput, Pressable, ImageBackground, Modal} from "react-native";
import {Component} from "react";
import style from "./style"


export default class redefinir_senha extends Component{
state = {


}

render(){
  return (
<View style={style.view}>
        {/* Botão do menu */}
       <View style = {style.menu}>
          <View style = {style.botao_home}>
           <Text style={style.text_input}>Olá, {this.state.obj}</Text>
         <Pressable style={style.botoes} 
         onPress={() => this.props.navigation.navigate("Login")}>
           <Text style={style.botoes_text}>Home</Text>
          </Pressable>
          </View>
         <Pressable style={style.botoes}
         onPress={() => this.props.navigation.navigate("Menu", {pagAnterior: "Sobre nós"} )}>
           <Text style={style.botoes_text}>Menu</Text>
          </Pressable>
        </View>
        <View style= {{marginTop: 50}}>
        <Text style={[style.text, {fontSize : 20, textAlign: "center"}]}>Sobre Nós:</Text>

        <Text style={style.text}>
        Na Natação swimming gear, somos apaixonados pelo mundo da natação. Desde o nosso início,
        nosso objetivo tem sido fornecer produtos de alta qualidade que ajudam nadadores de todos os níveis a alcançar
        seu melhor desempenho.
        </Text>

        <Text style={style.text}>
        Mais do que vender equipamentos, nosso compromisso é com o bem-estar e o sucesso de cada nadador. Nossa equipe é 
        formada por profissionais que entendem as necessidades de atletas, treinadores e entusiastas da natação, 
        oferecendo suporte, orientação e produtos inovadores.
        </Text>

        <Text style={style.text}>
        Na Natação swimming gear, acreditamos que cada braçada conta.
        Por isso, estamos sempre atualizados com as tendências
        do mercado e investindo em tecnologia para que você nade com confiança, conforto e desempenho máximo.
        </Text>
        </View>
        </View>
        )
}
}