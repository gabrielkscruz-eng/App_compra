
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Botões gerais
  botoes: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F2F2F2",
    borderRadius: 12,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    width: "100%", // evita corte
  },

  // estilo dos botões
  botoes_text: {
    color: "#0D0D0D",
    fontSize: 16,
    fontWeight: "600",
  },

  // Texto comum
  text: {
    color: "#0D0D0D",
    backgroundColor: "#F2F2F2",
    borderColor: "#F2F2F2",
    borderRadius: 12,
    borderWidth: 2,
    padding: 10,
    marginVertical: 5,
    fontSize: 15,
    width: "100%",
    textAlign: "center"
  },

  // Caixa de Fundo
  caixaFundo: {
    flex: 1,
    color: "#0D0D0D",
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 2,
    padding: 12,
    marginVertical: 6,
    fontSize: 16,
    width: "100%",
    height: "90%"
  },

  // Imagens
  image: {
  width: 120,
  height: 125,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: "#F2F2F2",
  marginRight: 10,
},

  // Texto + image lado a lado
  image_text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",     // antes era 90%, agora encaixa melhor
    backgroundColor: "#FFFFFF",
    marginVertical: 6,
    color: "#0D0D0D",
    borderColor: "#F2F2F2",
    borderRadius: 12,
    borderWidth: 2,
    padding: 5,
  },

  // Container que evita o conteúdo ultrapassar o header
  containerTop: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 12,   // impede texto cortar nas laterais
    width: "100%",           // ocupa a tela inteira certinho
  },

modal_fundo: {
    width: "50%",
  height:"50%",
  justifyContent: "center", // centraliza verticalmente
  alignItems: "center",     // centraliza horizontalmente
  backgroundColor: "rgba(0,0,0,0.4)", // fundo semitransparente
},
modal: {
  width: "190%",
  height:"150%",
  borderColor: "#E50914",
  borderWidth: 8,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  paddingHorizontal: 12,
  paddingVertical: 20,
},
modal_caixa: {
    width: "100%",
  height:"100%",
  // só organiza o conteúdo interno, sem flex
  justifyContent: "center",


  alignItems: "center",
},

  // Container principal da tela
view: {
    flex: 1,
    borderColor: "#E50914",
   
    borderWidth: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    marginBottom:50,
    marginTop: 1
  },
});

export default styles;
