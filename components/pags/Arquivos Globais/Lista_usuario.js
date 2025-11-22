export default class ListaUsuario {
  static lista_login = [
    { nome: "Joao", senha: "abc1r1" },
    { nome: "Jose", senha: "fy63u*" }
  ];

  static addUsuario(usuario) {
    this.lista_login.push(usuario);
  }

  static findUsuario(nome, senha) {
    return this.lista_login.find(u => u.nome === nome && u.senha === senha);
  }

  static existeUsuario(nome) {
    return this.lista_login.some(u => u.nome === nome);
  }

  static removeUsuario(nome){
    return this.lista_login = this.lista_login.filter(n => n.nome !== nome)
  } 

  static verificar_usuario(nome, senha){
     return usuarioValido = ListaGlobal.findUsuario(nome, senha);
  }
}