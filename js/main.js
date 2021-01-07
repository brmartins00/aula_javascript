function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //window.open("https://olhardigital.com.br/");
    window.location.href = "https://olhardigital.com.br/";
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}



function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/




/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10))
alert(setReplace("Vai Japão", "Japão", "Brasil"));

*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getFullYear());
alert(d.getTime());
*/



/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};

*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count ++;
}
*/

/*
var idade = prompt("Qual sua idade?")
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"branca"}];
console.log(frutas);
alert(frutas[1].cor);
*/




/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.join(" - "));


/*

var nome = "Wagner José Martins";
var idade = 51;
var idade2 = 10;
n1 = 25
n2 = 35
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(n1+n2)
console.log(nome);
console.log(idade/idade2);
console.log(frase.toLowerCase());
//alert(frase.lowercase());
*/

