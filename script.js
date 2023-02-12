
var recepcao = document.getElementById('recepcao')

function entrar(){
    var nome = prompt("Digite o seu nome");
    var sobrenome = prompt("Digite seu sobrenome");
    
    if(sobrenome === '' && nome === '' || sobrenome === null && nome === null){
        alert("Complete todos os dados")
        recepcao.innerHTML = "Complete todos os dados para entrar";
    }else if(nome === '' || nome === null ){
        alert("Complete o seu nome")
        recepcao.innerHTML = "Complete todos os dados para entrar";
    }else if(sobrenome === '' || sobrenome === null){
        alert("Complete o seu sobrenome")
        recepcao.innerHTML = "Complete todos os dados para entrar";
    }else{
        alert("Login realizado")
        recepcao.innerHTML = `Bem vindo ${nome} ${sobrenome} `;

        let lindo = document.createElement("button");
        lindo.innerText = "Sair"
        lindo.onclick = sair;
        recepcao.appendChild(lindo);
    }
}

function sair(){
    alert("Você saiu")
    recepcao.innerHTML = "Realize o seu login"
}

