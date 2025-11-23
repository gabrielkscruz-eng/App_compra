import { 
  View, Text, TextInput, Pressable, FlatList, Modal, Switch, Alert 
} from "react-native";
import { Component } from "react";
import style from "./style";
import Lista_produtos from "./ArquivosGlobais/Lista_produtos";
import Lista_usuario from "./ArquivosGlobais/Lista_usuario";

export default class Pagamento extends Component {
  state = {
    obj: Lista_usuario.usuario_online(),
    status_modal: false,
    numeroCartao: "",
    validade: "",
    cvv: "",
    debito: false,
    credito: false,
  };

  abrirModal = () => this.setState({ status_modal: true });
  fecharModal = () => this.setState({ status_modal: false });

  confirmarPagamento = () => {
    const { numeroCartao, validade, cvv } = this.state;
    if (!numeroCartao || !validade || !cvv) {
      return Alert.alert("Erro", "Preencha todos os campos do cartão!");
    }

    Lista_produtos.carrinho = [];
    this.setState({
      status_modal: false,
      numeroCartao: "",
      validade: "",
      cvv: "",
      debito: false,
      credito: false,
    });
    Alert.alert("Pagamento realizado com sucesso!");
  };

  limparCarrinho = () => {
    Lista_produtos.carrinho = [];
    this.setState({});
    Alert.alert("Carrinho limpo!");
  };

  render() {
    const { obj, status_modal, numeroCartao, validade, cvv, debito, credito } = this.state;
    const carrinho = Lista_produtos.carrinho;

    if (!carrinho || carrinho.length === 0) {
      return (
        <View style={style.view}>
          <Text style={{ textAlign: "center", marginTop: 50, fontSize: 18 }}>
            Carrinho vazio! Adicione produtos na loja antes de pagar.
          </Text>
          <Pressable style={style.botoes} onPress={() => this.props.navigation.navigate("Loja")}>
            <Text style={style.botoes_text}>Ir para Loja</Text>
          </Pressable>
        </View>
      );
    }

    const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

    return (
      <View style={style.view}>
        {/* MENU SUPERIOR */}
        <View style={style.menu}>
          <View style={style.botao_home}>
            <Text style={style.text_input}>Olá, {obj}</Text>
            <Pressable style={style.botoes} onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={style.botoes_text}>Home</Text>
            </Pressable>
          </View>

          <View style={style.caixa}>
            <Pressable
              style={[style.botoes, { paddingHorizontal: "42%", marginVertical: 6 }]}
              onPress={() => this.props.navigation.navigate("Menu", { pagAnterior: "Loja" })}
            >
              <Text style={style.botoes_text}>Menu</Text>
            </Pressable>
          </View>
        </View>

        {/* Lista de produtos no carrinho */}
        <View style={{ flex: 1, marginTop: 205 }}>
          <FlatList
            data={carrinho}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ marginVertical: 5 }}>
                <Text style={style.text}>{item.nome} - R$ {item.preco}</Text>
              </View>
            )}
          />
        </View>

        {/* Botões Limpar e Pagar */}
        <Pressable style={style.botoes} onPress={this.limparCarrinho}>
          <Text style={style.botoes_text}>Limpar Lista</Text>
        </Pressable>
        <Pressable style={style.botoes} onPress={this.abrirModal}>
          <Text style={style.botoes_text}>Pagar</Text>
        </Pressable>

        {/* Modal de Pagamento */}
        <Modal visible={status_modal} transparent animationType="slide">
          <View style={style.modal_fundo}>
            <View style={style.modal}>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
                Finalizar Pagamento
              </Text>

              {/* Produtos no modal */}
              <FlatList
                data={carrinho}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={{ marginVertical: 5 }}>
                    <Text style={style.text}>{item.nome} - R$ {item.preco}</Text>
                  </View>
                )}
              />

              {/* Total */}
              <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>
                Total: R$ {total}
              </Text>

              {/* Inputs do cartão */}
              <TextInput
                style={style.text_input}
                placeholder="Número do Cartão"
                value={numeroCartao}
                onChangeText={(text) => this.setState({ numeroCartao: text })}
              />
              <TextInput
                style={style.text_input}
                placeholder="Validade"
                value={validade}
                onChangeText={(text) => this.setState({ validade: text })}
              />
              <TextInput
                style={style.text_input}
                placeholder="CVV"
                value={cvv}
                onChangeText={(text) => this.setState({ cvv: text })}
              />

              {/* Switch tipo de pagamento */}
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                <Text style={{ marginRight: 10 }}>Débito</Text>
                <Switch
                  value={debito}
                  onValueChange={(val) => this.setState({ debito: val, credito: !val })}
                />
                <Text style={{ marginLeft: 10, marginRight: 10 }}>Crédito</Text>
                <Switch
                  value={credito}
                  onValueChange={(val) => this.setState({ credito: val, debito: !val })}
                />
              </View>

              {/* Botões Confirmar e Fechar */}
              <Pressable style={style.botoes} onPress={this.confirmarPagamento}>
                <Text style={style.botoes_text}>Confirmar Pagamento</Text>
              </Pressable>
              <Pressable style={style.botoes} onPress={this.fecharModal}>
                <Text style={style.botoes_text}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
