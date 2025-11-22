import { View, Text, TextInput, Pressable, Image, Modal, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { Component } from "react";
import style from "./style";
import ListaUsuario from "./Arquivos Globais/Lista_usuario"

export default class Login extends Component {
  state = {
    cadastrar: false,
    usuario: "",
    senha: "",
    
  };


verificar_exitencia() {
  return ListaUsuario.existeUsuario(this.state.usuario);
}

login() {
  if (ListaUsuario.verificar_usuario(this.state.usuario, this.state.senha)) {
    this.setState({ usuario: "", senha: "" });
    this.props.navigation.navigate("Loja");
  } else {
    Alert.alert("Erro", "Usuário ou senha inválido");
  }
}

cadastrar() {
  if (!this.verificar_exitencia()) {
    ListaUsuario.addUsuario({ nome: this.state.usuario, senha: this.state.senha });
    this.setState({ usuario: "", senha: "", cadastrar: false });
  } else {
    Alert.alert("Usuário já existente", "Cadastre outro Usuário");
  }
}

  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <View style={style.view}>
          <Image style={style.image} source={require("./img/logo_da_loja.png")} />

          <Text style={style.text}>Cadastro</Text>

          <View style={style.text_text_input}>
            <Text style={style.text}>Usúario:</Text>
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

          <Pressable style={style.botoes} onPress={() => this.login()}>
            <Text style={style.botoes_text}>Login</Text>
          </Pressable>

          <Pressable style={style.botoes} onPress={() => this.setState({ cadastrar: true })}>
            <Text style={style.botoes_text}>Cadastrar</Text>
          </Pressable>
        </View>

        {/* MODAL */}
        <Modal visible={this.state.cadastrar}>
          <View style={style.modal_fundo}>
            <View style={style.modal}>
              <View style={style.modal_caixa}>

                <View style={style.text_text_input}>
                  <Text style={style.text}>Usúario:</Text>
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

                <Pressable style={style.botoes} onPress={() => this.cadastrar()}>
                  <Text style={style.botoes_text}>Cadastrar</Text>
                </Pressable>

                <Pressable style={style.botoes} onPress={() => this.setState({ cadastrar: false })}>
                  <Text style={style.botoes_text}>Voltar</Text>
                </Pressable>

              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    );
  }
}