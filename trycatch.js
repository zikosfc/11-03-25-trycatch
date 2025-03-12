//const nome = "Fernanda"; //para declarar a variavel nome, const = somente leitura

//try { //
   // nome = "Rodrigues"; // tentando mudar o nome da variavel, mas não é possivel "pois const" é somente leitura
//} 

//catch (err) { //catch vai capturar o erro e mandar para a variavel err
    //console.error("Ops! A variável somente leitura 'nome' não pode ser alterada. Veja o erro: " + err); //vai mandar a mensagem de erro escrita e o erro para o console
//}

//console.log("teste");

//nome = "Fernanda";

//console.log("teste2");//quando tenta fazer um codigo ilegal no JS ele bloqueia  continuação do resto do script.


function fazerLogin() { // função que verifica se o login e a senha estão corretos
    let usuario = document.getElementById("txtLogin"); // pega o valor do campo de login usando o id "txtLogin"
    let senha = document.getElementById("txtSenha"); // pega o valor do campo de senha usando o id "txtSenha"

    try {
        if (usuario.value !== "ziko1309") { // verifica se o login digitado é diferente do descrito no codigo
            usuario.focus();
            throw new Error("erro: usuário inválido."); // se o login estiver errado, aparecera o erro
        }

        if (senha.value !== "Neym@r3010") { // verifica se a senha digitada é diferente da verdadeira
            senha.focus();
            throw new Error("erro: senha inválida."); // se a senha estiver errada, aparece o erro
        }

        console.log("login realizado com sucesso"); // se o login estiver certo, exibe uma mensagem de sucesso no console
    } catch (erro) {
        console.error(erro.message); // se o login estiver errado, mostra a mensagem de erro no console
    }
}


