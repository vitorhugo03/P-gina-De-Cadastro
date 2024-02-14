let usuarios = [
    { nome: "Usuário1", email: "usuario120@example.com", senha: "senha123" },
    { nome: "Usuário2", email: "usuario215@example.com", senha: "senha456" }
];

function cadastrar(event) {
    event.preventDefault();

    let nome = document.getElementById("nomeInput").value;
    let email = document.getElementById("emailInput").value;
    let senha = document.getElementById("senhaInput").value;

    if (nome.trim() === "" || email.trim() === "" || senha.trim() === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Conta criada com sucesso!\nNome: " + nome + "\nEmail: " + email);
    }
}

function login() {
    let email = prompt("Digite seu email:");
    let senha = prompt("Digite sua senha:");

    let usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if (usuarioEncontrado) {
        alert("Login bem-sucedido!\nBem-vindo, " + usuarioEncontrado.nome);
    } else {
        alert("Email ou senha incorreta!");
    }
}
