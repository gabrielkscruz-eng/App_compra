import React, { Component } from 'react';
import { View, Text, Pressable, Modal } from "react-native";
import style from "./style";

export default class Menu extends Component {
  render() {
    const { pagAnterior } = this.props.route.params;
    return (
      <Modal transparent={true} visible={true} animationType="slide">

        <View style={style.modal_fundo}>
          <View style={style.modal}>
            <View style={style.modal_caixa}>

              <Pressable style={style.botoes} onPress={() => this.props.navigation.navigate("Login")}>
                <Text style={style.botoes_text}>Login</Text>
              </Pressable>

              <Pressable style={style.botoes} onPress={() => this.props.navigation.navigate("Loja")}>
                <Text style={style.botoes_text}>Loja</Text>
              </Pressable>

              <Pressable style={style.botoes} onPress={() => this.props.navigation.navigate("Pagamento")}>
                <Text style={style.botoes_text}>Carrinho</Text>
              </Pressable>

              <Pressable style={style.botoes} onPress={() => this.props.navigation.navigate("Redefinir Senha")}>
                <Text style={style.botoes_text}>Redefinir Senha</Text>
              </Pressable>

              <Pressable style={style.botoes} onPress={() => this.props.navigation.navigate("Sobre nós")}>
                <Text style={style.botoes_text}>Sobre Nós</Text>
              </Pressable>

              {/* FECHA O MENU DA TELA PRINCIPAL */}
              <Pressable style={style.botoes} onPress={() => this.props.navigation.navigate(pagAnterior)}>
                <Text style={style.botoes_text}>Voltar</Text>
              </Pressable>

            </View>
          </View>
        </View>

      </Modal>
    );
  }
}
