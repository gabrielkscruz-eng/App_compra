import { View, Alert, Text, TextInput, Pressable, Modal } from "react-native";
import { Component } from "react";
import style from "./style";
import ListaGlobal from "";

export default class RedefinirSenha extends Component {
  state = {
    usuario: "",
    senha: "",
    mostrarModal: false, // controla a exibição do modal
  };

  redefinirSenha() {
    ListaGlobal.removeUsuario(this.state.usuario);
    ListaGlobal.addUsuario({ nome: this.state.usuario, senha: this.state.senha });
    this.setState({ mostrarModal: false, usuario: "", senha: "" });
    Alert.alert("Ação realizada com sucesso", "Senha foi alterada");
  }

  abrirModal() {
    if (ListaGlobal.existeUsuario(this.state.usuario) &&
    ListaGlobal.verificar_usuario(this.state.usuario, this.state.senha)) {
      this.setState({ mostrarModal: true, senha: "" });
    } else {
      Alert.alert("Usuário inexistente", "Entre com outro nome de usuário");
    }
  }

  render() {
    return (
      <View style={style.view}>
        {/* Botão do menu */}
        <View style={style.menu}>
          <Pressable
            style={style.botoes}
            onPress={() =>
              this.props.navigation.navigate("Menu", { pagAnterior: "Redefinir Senha" })
            }
          >
            <Text style={style.botoes_text}>Menu</Text>
          </Pressable>
        </View>

        {/* Input do usuário */}
        <Text style={[style.text, {fontSize : 20, textAlign: "center"}]}>Entre com o seu Nome de Usuário e Senha:</Text>

        <View style={style.text_text_input}>
          <Text style={style.text}>Usuário:</Text>
          <TextInput
            style={style.text_input}
            value={this.state.usuario}
            onChangeText={(texto) => this.setState({ usuario: texto })}
          />
        </View>

        <View style={style.text_text_input}>
          <Text style={style.text}>Senha:</Text>
          <TextInput
            style={style.text_input}
            value={this.state.senha}
            onChangeText={(texto) => this.setState({ senha: texto })}
          />
        </View>

        {/* Botão para abrir modal */}
        <Pressable style={style.botoes} onPress={() => this.abrirModal()}>
          <Text style={style.botoes_text}>Redefinir Senha</Text>
        </Pressable>

        {/* Modal de redefinição de senha */}
        <Modal
          transparent={true}
          visible={this.state.mostrarModal}
          animationType="slide"
        >
          <View style={style.modal_fundo}>
            <View style={style.modal}>
              <View style={style.modal_caixa}>
                <View style={style.text_text_input}>
                  <Text style={[style.text, {fontSize : 13}]}>Nova Senha:</Text>
                  <TextInput
                    style={style.text_input}
                    value={this.state.senha}
                    onChangeText={(texto) => this.setState({ senha: texto })}
                  />
                </View>

                <View style = {style.text_text_input}>
                <Pressable
                  style={style.botoes}
                  onPress={() => this.redefinirSenha()}
                >
                  <Text style={style.botoes_text}>Salvar</Text>
                </Pressable>

                <Pressable
                  style={style.botoes}
                  onPress={() => this.setState({ mostrarModal: false })}
                >
                  <Text style={style.botoes_text}>Voltar</Text>
                </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

