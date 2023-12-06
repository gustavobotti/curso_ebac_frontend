class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, eu sou o ${this.nome} e tenho ${this.idade} anos de idade.`);
    }
}

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade);
        this.cargo = cargo;
    }

    apresentar() {
        console.log(`Olá, eu sou o ${this.nome} e tenho ${this.idade} anos de idade. Trabalho aqui como ${this.cargo}.`);
    }

    realizarTarefa() {
        console.log(`${this.nome} está realizando suas tarefas como ${this.cargo}.`);
    }
}

class Cliente extends Pessoa {
    constructor(nome, idade, produtoComprado) {
        super(nome, idade);
        this.produtoComprado = produtoComprado;
    }

    apresentar() {
        console.log(`Olá, eu sou o ${this.nome} e tenho ${this.idade} anos de idade. Eu comprei um ${this.produtoComprado}.`);
    }

    fazerPedido() {
        console.log(`${this.nome} está fazendo um pedido. Ele quer um ${this.produtoComprado}.`);
    }
}

const pessoa = new Pessoa("Gustavo", 30);
const funcionario = new Funcionario("Mariana", 25, "Desenvolvedor(a)");
const cliente = new Cliente("Botti", 40, "Smartphone");

pessoa.apresentar();
funcionario.apresentar();
funcionario.realizarTarefa();
cliente.apresentar();
cliente.fazerPedido();