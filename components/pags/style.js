

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
  },
  // estilo dos botões
  botoes_text: {
    color: "#0D0D0D",
    fontSize: 16,
    fontWeight: "600",
  },

   caixa : {
    alignItems : "center",
    justifyContent: "center"
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
    fontSize: 16,
  },

  // Entrada de texto
  text_input: {
    color: "#0D0D0D",
    borderColor: "#F2F2F2",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 2,
    padding: 12,
    marginVertical: 6,
    width: "75%",
    fontSize: 16,
  },

  // Imagens
  image: {
    width: "100%",
    height: "40%",
    resizeMode: "contain",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#F2F2F2",
    margin: 15,
  },

  // Texto + input lado a lado
  text_text_input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FFFFFF",
    marginVertical: 6,
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
   // Tela do Modal
  modal : {

    borderColor: "#E50914",
    borderWidth: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
  },
  modal_caixa : {
    alignItems : "center",
    justifyContent: "center"
  },
  modal_fundo: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.4)", 
  justifyContent: "center",          
  alignItems: "center",               
  },
  // estilo do menu
  menu : {
    position: 'absolute',
    top: 10,
    padding: 10,
    },
      // usuario e botão home
  usuario_login:{
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10 
  },
  //botão home text input
  botao_home:{
    flexDirection: "row",
    alignItems: 'center',
  },

});

export default styles;
