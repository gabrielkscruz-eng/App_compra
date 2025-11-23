import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { Component } from "react";
import style from "./style";
import Lista_produtos from "./ArquivosGlobais/Lista_produtos";
import Lista_usuario from "./ArquivosGlobais/Lista_usuario";

export default class Loja extends Component {
  state = {
    obj: Lista_usuario.usuario_online(),
    pesquisa: "",
    lista_produtos: Lista_produtos.lista_Produtos,
    status_modal: false,
    produto_selecionado: null,
  };

  // Marca apenas 1 produto como selecionado
  marcaItem = (id) => {
    this.setState((prevState) => ({
      lista_produtos: prevState.lista_produtos.map((item) =>
        item.id === id
          ? { ...item, selecionado: !item.selecionado }
          : { ...item, selecionado: false }
      ),
    }));
  };

  // Abrir modal de um produto
  abrirModal = (item) => {
    this.setState({ status_modal: true, produto_selecionado: item });
  };

  // Fechar modal
  fecharModal = () => {
    this.setState({ status_modal: false, produto_selecionado: null });
  };

  // Atualiza a pesquisa
  pesquisar = (texto) => {
    this.setState({ pesquisa: texto });
  };

  render() {
    const { lista_produtos, pesquisa, status_modal, produto_selecionado } =
      this.state;

    const produtosFiltrados = lista_produtos.filter((item) =>
      item.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );

    return (
      <View style={style.view}>
        {/* MENU SUPERIOR */}
        <View style={style.menu}>
          <View style={style.botao_home}>
            <Text style={style.text_input}>Olá, {this.state.obj}</Text>
            <Pressable
              style={style.botoes}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={style.botoes_text}>Home</Text>
            </Pressable>
          </View>

          <View style={style.caixa}>
            <Pressable
              style={[style.botoes, { paddingHorizontal: "42%", marginVertical: 6 }]}
              onPress={() =>
                this.props.navigation.navigate("Menu", { pagAnterior: "Loja" })
              }
            >
              <Text style={style.botoes_text}>Menu</Text>
            </Pressable>

            <TextInput
              style={style.text_input}
              onChangeText={this.pesquisar}
              placeholder="Pesquisar..."
            />
          </View>
        </View>

        {/* FLATLIST DE PRODUTOS */}
        <View style={{ flex: 1, marginTop: 205 }}>
          <FlatList
            data={produtosFiltrados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              Lista_produtos.exibirProduto(
                item,
                this.marcaItem,
                status_modal && produto_selecionado?.id === item.id,
                produto_selecionado,
                this.fecharModal
              )
            }
          />

          {/* BOTÃO DE COMPRA */}
          <Pressable
            style={[style.botoes, { paddingHorizontal: "42%", marginVertical: 6 }]}
            onPress={() => {
              const selecionado = lista_produtos.find((item) => item.selecionado);
              if (selecionado) this.abrirModal(selecionado);
            }}
          >
            <Text style={[style.botoes_text, { fontSize: 14 }]}>Compra</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}
