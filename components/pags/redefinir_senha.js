import { View, Alert, Text, TextInput, Pressable, Modal } from "react-native";
import { Component } from "react";
import style from "./style";
import ListaGlobal from "./ArquivosGlobais/Lista_usuario";

export default class RedefinirSenha extends Component {
  state = {
    usuario: "",
    senha: "",
    mostrarModal: false,
  };

  abrirModal = () => {
    const { usuario, senha } = this.state;

    if (!usuario || !senha) {
      return Alert.alert("Erro", "Usuário ou senha estão vazios");
    }

    if (ListaGlobal.verificar_online()) {
      if (ListaGlobal.existeUsuario(usuario) &&
          ListaGlobal.verificar_usuario(usuario, senha)) {
        this.setState({ mostrarModal: true, senha: "" });
      } else {
        Alert.alert("Usuário inexistente!", "Entre com outro nome de usuário.");
      }
    }
  };

  redefinirSenha = () => {
    const { usuario, senha } = this.state;

    if (!usuario || !senha) {
      return Alert.alert("Erro", "Usuário ou senha estão vazios");
    }

    ListaGlobal.removeUsuario(usuario);
    ListaGlobal.addUsuario({ nome: usuario, senha });
    this.setState({ mostrarModal: false, usuario: "", senha: "" });
    Alert.alert("Ação realizada com sucesso", "Senha foi alterada");
  };

  render() {
    const { usuario, senha, mostrarModal } = this.state;

    return (
      <View style={style.view}>
        {/* MENU */}
        <View style={style.menu}>
          <View style={style.botao_home}>
            <Text style={style.text_input}>Olá, {usuario}</Text>
            <Pressable
              style={style.botoes}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={style.botoes_text}>Home</Text>
            </Pressable>
          </View>
          <Pressable
            style={style.botoes}
            onPress={() =>
              this.props.navigation.navigate("Menu", { pagAnterior: "Redefinir Senha" })
            }
          >
            <Text style={style.botoes_text}>Menu</Text>
          </Pressable>
        </View>

        {/* Inputs de usuário e senha */}
        <Text style={[style.text, { fontSize: 20, textAlign: "center" }]}>
          Entre com o seu Nome de Usuário e Senha:
        </Text>

        <View style={style.text_text_input}>
          <Text style={style.text}>Usuário:</Text>
          <TextInput
            style={style.text_input}
            value={usuario}
            onChangeText={(texto) => this.setState({ usuario: texto })}
          />
        </View>

        <View style={style.text_text_input}>
          <Text style={style.text}>Senha:</Text>
          <TextInput
            style={style.text_input}
            value={senha}
            onChangeText={(texto) => this.setState({ senha: texto })}
          />
        </View>

        {/* Botão abrir modal */}
        <Pressable style={style.botoes} onPress={this.abrirModal}>
          <Text style={style.botoes_text}>Redefinir Senha</Text>
        </Pressable>

        {/* Modal de redefinição de senha */}
        <Modal transparent visible={mostrarModal} animationType="slide">
          <View style={style.modal_fundo}>
            <View style={style.modal}>
              <View style={style.modal_caixa}>
                <View style={style.text_text_input}>
                  <Text style={[style.text, { fontSize: 13 }]}>Nova Senha:</Text>
                  <TextInput
                    style={style.text_input}
                    value={senha}
                    onChangeText={(texto) => this.setState({ senha: texto })}
                  />
                </View>

                <View style={style.text_text_input}>
                  <Pressable style={style.botoes} onPress={this.redefinirSenha}>
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
