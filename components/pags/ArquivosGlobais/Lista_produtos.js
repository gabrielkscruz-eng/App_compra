import { CheckBox } from 'react-native-elements';
import { View, Text, Image, Modal, Pressable } from "react-native";
import style from "./style_class";

// =======================
// Lista de Produtos
// =======================
export default class Lista_produtos {

  // Lista de produtos disponíveis
  static lista_Produtos = [
    { id: "0001", nome: "Nadadeira Mormai", categoria: "Pé de pato", preco: 200, imagem: require("./imgProdutos/img_0001.png"), descricao: "Nadadeira ideal para treino e natação em piscina ou mar, proporcionando melhor propulsão.", selecionado: false },
    { id: "0002", nome: "Óculos Speedo Hydro", categoria: "Óculos de Natação", preco: 85, imagem: require("./imgProdutos/img_0002.png"), descricao: "Óculos com lente antiembaçante e ajuste confortável para proteger os olhos durante a natação.", selecionado: false },
    { id: "0003", nome: "Touca Silicone Nike", categoria: "Touca", preco: 45, imagem: require("./imgProdutos/img_0003.png"), descricao: "Touca de silicone resistente, ideal para reduzir resistência da água e proteger os cabelos.", selecionado: false },
    { id: "0004", nome: "Prancha Hidro", categoria: "Prancha", preco: 70, imagem: require("./imgProdutos/img_0004.png"), descricao: "Prancha de treino para exercícios de pernada, leve e resistente.", selecionado: false },
    { id: "0005", nome: "Snorkel Pro Swim", categoria: "Snorkel", preco: 120, imagem: require("./imgProdutos/img_0005.png"), descricao: "Snorkel de treino que permite respirar sem levantar a cabeça, melhorando técnica de natação.", selecionado: false },
    { id: "0006", nome: "Sunga Atleta", categoria: "Vestimenta", preco: 65, imagem: require("./imgProdutos/img_0006.png"), descricao: "Sunga de alta performance, confortável e resistente ao cloro.", selecionado: false },
    { id: "0007", nome: "Maiô Wave", categoria: "Vestimenta", preco: 110, imagem: require("./imgProdutos/img_0007.png"), descricao: "Maiô feminino resistente ao cloro, ideal para treino e competição.", selecionado: false },
    { id: "0008", nome: "Flutuador Infantil Tubarão", categoria: "Acessórios Infantís", preco: 95, imagem: require("./imgProdutos/img_0008.png"), descricao: "Flutuador divertido e seguro para crianças, ajuda no aprendizado da natação.", selecionado: false },
    { id: "0009", nome: "Palmar SwimUp", categoria: "Treino", preco: 55, imagem: require("./imgProdutos/img_0009.png"), descricao: "Palmar leve que melhora a força e técnica das mãos na natação.", selecionado: false },
    { id: "0010", nome: "Noodle AquaFit", categoria: "Acessórios", preco: 30, imagem: require("./imgProdutos/img_0010.png"), descricao: "Espaguete flutuante para exercícios aquáticos, ideal para hidroginástica.", selecionado: false },
    { id: "0011", nome: "Toalha Microfibra Pro", categoria: "Toalha", preco: 40, imagem: require("./imgProdutos/img_0011.png"), descricao: "Toalha de microfibra leve e de rápida absorção.", selecionado: false },
    { id: "0012", nome: "Short Treino Aquático", categoria: "Vestimenta", preco: 75, imagem: require("./imgProdutos/img_0012.png"), descricao: "Short de natação confortável, resistente ao cloro e de secagem rápida.", selecionado: false },
    { id: "0013", nome: "Relógio Cronômetro SwimTech", categoria: "Tecnologia", preco: 260, imagem: require("./imgProdutos/img_0013.png"), descricao: "Cronômetro à prova d'água, perfeito para treinos e competições de natação.", selecionado: false },
    { id: "0014", nome: "Bolsa Impermeável 15L", categoria: "Acessórios", preco: 90, imagem: require("./imgProdutos/img_0014.png"), descricao: "Bolsa resistente à água, ideal para guardar roupas e equipamentos molhados.", selecionado: false },
    { id: "0015", nome: "Chinelo Piscina Antiderrapante", categoria: "Calçados", preco: 55, imagem: require("./imgProdutos/img_0015.png"), descricao: "Chinelo confortável e seguro, evita escorregões em áreas molhadas.", selecionado: false },
    { id: "0016", nome: "Paddle Pro Force", categoria: "Treino", preco: 48, imagem: require("./imgProdutos/img_0016.png"), descricao: "Paddle para treino de força e resistência dos braços.", selecionado: false },
    { id: "0017", nome: "Luvas Aquáticas", categoria: "Treino", preco: 50, imagem: require("./imgProdutos/img_0017.png"), descricao: "Luvas que aumentam a resistência na água, melhorando desempenho do treino.", selecionado: false },
    { id: "0018", nome: "Kit Óculos + Touca Speedo", categoria: "Kit", preco: 120, imagem: require("./imgProdutos/img_0018.png"), descricao: "Kit completo para natação, contendo óculos antiembaçante e touca de silicone.", selecionado: false },
    { id: "0019", nome: "Tapete Aquático Densidade Alta", categoria: "Treino", preco: 140, imagem: require("./imgProdutos/img_0019.png"), descricao: "Tapete flutuante para treino de equilíbrio e exercícios aquáticos.", selecionado: false },
    { id: "0020", nome: "Protetor Nasal SwimSafe", categoria: "Acessórios", preco: 20, imagem: require("./imgProdutos/img_0020.png"), descricao: "Protetor nasal confortável que evita entrada de água durante a natação.", selecionado: false }
  ];

  // Carrinho inicial (ex.: itens adicionados manualmente)
  static carrinho = [
    { id: "0019", nome: "Tapete Aquático Densidade Alta", categoria: "Treino", preco: 140, imagem: require("./imgProdutos/img_0019.png"), descricao: "Tapete flutuante para treino de equilíbrio e exercícios aquáticos.", selecionado: false },
    { id: "0020", nome: "Protetor Nasal SwimSafe", categoria: "Acessórios", preco: 20, imagem: require("./imgProdutos/img_0020.png"), descricao: "Protetor nasal confortável que evita entrada de água durante a natação.", selecionado: false }
  ];

  // =======================
  // Funções de carrinho
  // =======================
  static adicionarCarrinho(item) {
    this.carrinho.push(item);
    return this.carrinho.reduce((total, prod) => total + (prod.preco || 0), 0);
  }

  // =======================
  // Funções de busca
  // =======================
  static findProduto(id, nome, categoria, preco, imagem, descricao, selecionado) {
    return this.lista_Produtos.find(u => 
      (id ? u.id === id : true) &&
      (nome ? u.nome === nome : true) &&
      (categoria ? u.categoria === categoria : true) &&
      (preco ? u.preco === preco : true) &&
      (imagem ? u.imagem === imagem : true) &&
      (descricao ? u.descricao === descricao : true) &&
      (selecionado !== undefined ? u.selecionado === selecionado : true)
    );
  }

  static verificarSelecionado(id, nome, categoria, preco, imagem, descricao, selecionado) {
    return this.lista_Produtos.some(u => 
      (id ? u.id === id : true) &&
      (nome ? u.nome === nome : true) &&
      (categoria ? u.categoria === categoria : true) &&
      (preco ? u.preco === preco : true) &&
      (imagem ? u.imagem === imagem : true) &&
      (descricao ? u.descricao === descricao : true) &&
      (selecionado !== undefined ? u.selecionado === selecionado : true)
    );
  }

  // =======================
  // Exibição de produtos
  // =======================
  static exibirProduto(item, marcaItem, status_modal, produto_selecionado, fecharModal, atualizarTela) {
    return (
      <View style={style.image_text} key={item.id}>
        <CheckBox checked={item.selecionado} onPress={() => marcaItem(item.id)} />
        <Image style={style.image} resizeMode="contain" source={item.imagem} />
        <View style={style.caixaFundo}>
          <Text style={style.text}>{item.nome}</Text>
          <Text style={style.text}>R$ {item.preco}</Text>
        </View>

        {status_modal && produto_selecionado?.id === item.id && (
          <Modal visible={status_modal} transparent={true} animationType="slide">
            <View style={style.modal_caixa}>
              <View style={style.modal_fundo}>
                <View style={style.modal} key={produto_selecionado.id}>
                  <Image style={style.image} resizeMode="contain" source={produto_selecionado.imagem} />
                  <View style={style.caixaFundo}>
                    <Text style={style.text}>{produto_selecionado.nome}</Text>
                    <Text style={style.text}>R$ {produto_selecionado.preco}</Text>
                    <Text style={style.text}>{produto_selecionado.descricao}</Text>
                    <Text style={style.text}>{produto_selecionado.categoria}</Text>
                  </View>
                  <Pressable style={[style.botoes, { paddingHorizontal: "10%", marginVertical: 6 }]} onPress={() => atualizarTela && atualizarTela(item)}>
                    <Text style={[style.botoes_text, { fontSize: 15 }]}>Adicionar no Carrinho</Text>
                  </Pressable>
                  <Pressable style={[style.botoes, { paddingHorizontal: "42%", marginVertical: 6 }]} onPress={fecharModal}>
                    <Text style={[style.botoes_text, { fontSize: 15 }]}>Fechar</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        )}
      </View>
    );
  }

  // =======================
  // Exibição de itens no carrinho
  // =======================
  static carrinhoItem(itemCarrinho) {
    return (
      <View style={style.image_text} key={itemCarrinho.id}>
        <Image style={style.image} resizeMode="contain" source={itemCarrinho.imagem} />
        <View style={style.caixaFundo}>
          <Text style={style.text}>{itemCarrinho.nome}</Text>
          <Text style={style.text}>R$ {itemCarrinho.preco}</Text>
        </View>
      </View>
    );
  }
}
