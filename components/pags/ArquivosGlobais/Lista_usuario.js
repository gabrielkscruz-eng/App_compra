export default class ListaUsuario {
  static lista_login = [
    { nome: "Joao", senha: "abc1r1", online: false },
    { nome: "Jose", senha: "fy63u*", online: false }
  ];

  static addUsuario(usuario) {
    this.lista_login.push(usuario);
  }

  static findUsuario(nome, senha, status) {
    return this.lista_login.find(u =>
      (nome ? u.nome === nome : true) &&
      (senha ? u.senha === senha : true) &&
      (status !== undefined ? u.online === status : true)
    );
  }

  static existeUsuario(nome) {
    return this.lista_login.some(u => u.nome === nome);
  }

  static removeUsuario(nome) {
    this.lista_login = this.lista_login.filter(u => u.nome !== nome);
  }

  static verificar_usuario(nome, senha) {
    return !!this.findUsuario(nome, senha);
  }

  static trocar_online_usuario(usuario, status) {
    this.lista_login = this.lista_login.map(item => {
      if (item.nome == usuario) {
        return { ...item, ...status };
      }
      return item;
    });
  }

  static trocar_off() {
    this.lista_login = this.lista_login.map(item => {
      if (item.online) {
        return { ...item, online: false };
      }
      return item;
    });
  }

  static verificar_online() {
    return this.lista_login.some(u => u.online);
  }

  static usuario_online() {
    const usuario = this.findUsuario(undefined, undefined, true);
    return usuario ? usuario.nome : null;
  }
}
