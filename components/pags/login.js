import { 
  View, Text, TextInput, Pressable, Image, Modal, Alert, 
  KeyboardAvoidingView, Platform 
} from "react-native";
import { Component } from "react";
import style from "./style";
import ListaUsuario from "./ArquivosGlobais/Lista_usuario";

export default class Login extends Component {
  state = {
    cadastrar: false,
    usuario: "",
    senha: "",
    online: false,
  };

  // Verifica se usuário já existe
  verificar_existencia = () => ListaUsuario.existeUsuario(this.state.usuario);

  // Realiza login
  login = () => {
    const { usuario, senha } = this.state;

    if (!usuario || !senha) {
      return Alert.alert("Erro", "Usuário ou senha estão vazios");
    }

    if (ListaUsuario.verificar_usuario(usuario, senha)) {
      ListaUsuario.trocar_online_usuario(usuario, { online: true });
      this.setState({ usuario: "", senha: "" });
      this.props.navigation.navigate("Loja");
    } else {
      Alert.alert("Erro", "Usuário ou senha inválido");
    }
  };

  // Cadastro de usuário
  cadastrar = () => {
    const { usuario, senha } = this.state;

    if (!usuario || !senha) {
      return Alert.alert("Erro", "Usuário ou senha estão vazios");
    }

    if (!this.verificar_existencia()) {
      ListaUsuario.addUsuario({ nome: usuario, senha, online: false });
      this.setState({ usuario: "", senha: "", cadastrar: false, online: false });
    } else {
      Alert.alert("Usuário já existente!", "Cadastre outro usuário.");
    }
  };

  // Logout do usuário online
  sair = () => {
    if (ListaUsuario.verificar_online()) {
      ListaUsuario.trocar_off();
      Alert.alert("Saindo...", "Seu logoff foi realizado com sucesso.");
    } else {
      Alert.alert("Aviso!", "Você já está desconectado.");
    }
  };

  render() {
    const { usuario, senha, cadastrar } = this.state;

    return (
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={{ flex: 1 }}
      >
        <View style={style.view}>
          <Image style={style.image_fundo} source={require("./img/logo_da_loja.png")} />

          <Text style={style.text}>Login</Text>

          {/* Inputs de login */}
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
              secureTextEntry
            />
          </View>

          {/* Botões */}
          <Pressable style={style.botoes} onPress={this.login}>
            <Text style={style.botoes_text}>Login</Text>
          </Pressable>

          <Pressable style={style.botoes} onPress={() => this.setState({ cadastrar: true })}>
            <Text style={style.botoes_text}>Cadastrar</Text>
          </Pressable>

          <Pressable style={style.botoes} onPress={this.sair}>
            <Text style={style.botoes_text}>Sair</Text>
          </Pressable>
        </View>

        {/* Modal de cadastro */}
        <Modal visible={cadastrar} transparent animationType="slide">
          <View style={style.modal_fundo}>
            <View style={style.modal}>
              <View style={style.modal_caixa}>
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
                    secureTextEntry
                  />
                </View>

                <Pressable style={style.botoes} onPress={this.cadastrar}>
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
