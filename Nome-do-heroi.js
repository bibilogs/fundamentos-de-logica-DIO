//função para validar se o nome é uma string e tem pelo menos dois caracteres 
function validarNome(nome) {
    return (
        typeof nome === "string" && nome.length >= 2
    );

}

//função para validar se o xp é um valor positivo e inteiro 
function validarXP(xp) {
    return (
        Number.isInteger(xp) && xp >= 0
    );

}

//função para classificar o xp
function classificarNivel(xp) {
    if (xp <= 1000) return "Ferro";
    if (xp <= 2000) return "Bronze";
    if (xp <= 5000) return "Prata";
    if (xp <= 7000) return "Ouro";
    if (xp <= 8000) return "Platina";
    if (xp <= 9000) return "Ascendente";
    if (xp <= 1000) return "Imortal";
    return "Radiante";
}

//função para padronizar nome
function capitalizarNome(nome) {
    nomeCapitalizado = nome.trim(); //remover possíveis espaços
    return nomeCapitalizado.charAt(0).toUpperCase() + nomeCapitalizado.slice(1).toLowerCase(); //capitaliza a primeira letra
}


//entrada de dados
let nomeHeroi;
do {
    nomeHeroi = prompt("Informe o nome do herói (mínimo de 2 letras): ");
    if (!validarNome(nomeHeroi)) {
        console.log("Nome inválido, por favor informe novamente!");
    }
} while (!validarNome(nomeHeroi));

//padroniza o nome do herói pós validação
nomeHeroi = capitalizarNome(nomeHeroi);

let xpHeroi;
do {
    xpHeroi = prompt("Informe a quantidade de XP do herói (valor inteiro e positivo): ");
    xpHeroi = parseInt(xpHeroi, 10);
    console.log(xpHeroi);
    if (!validarXP(xpHeroi)) {
        console.log("XP inválido, por favor informe novamente!");
    }
} while (!validarXP(xpHeroi));

//atribuindo nível a função de classificação
let nivel = classificarNivel(xpHeroi);


//mensagem para o usuário
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);