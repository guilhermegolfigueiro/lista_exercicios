
//1
function questao1() {
    let soma = 0;
    let continuar = true;

    while (continuar){
        let numero = parseFloat(prompt('Digite um numero:'));

        if (!isNaN(numero)) {
            soma += numero;
        } else{
            console.log('Digite um numero valido');
        }
        continuar = confirm('Deseja adicionar outro numero');
    }

    console.log("A soma total é:" + soma);
}


//2
function questao2(){
    let contagem = 10;
    
    const intervalo = setInterval(() =>{
        console.log(contagem);

        if (contagem === 0){
            clearInterval(intervalo);
            console.log("Lançado");
            return;
        }

        contagem--;
    }, 1000);

}


//3
function questao3() {
    let ganhos = []
    let gastos = []
    let somaB = 0
    let somaG = 0

    for(let i = 0; i < 12; i++){

        let numeroB = parseFloat(prompt("Digite o ganho bruto:"))

        if(!isNaN(numeroB)){
            ganhos.push(numeroB);
            somaB += numeroB;
        } else{
            console.log("Número invalido");
            i--;
        }
    }

    for(let i = 0; i < 12; i++){

        let numeroG = parseFloat(prompt("Digite os gastos do meses:"))

        if(!isNaN(numeroG)){
            gastos.push(numeroG);
            somaG += numeroG;
        } else{
            console.log("Número invalido");
            i--;
        }
    }

    let saldo = somaB - somaG

    if(saldo > 0){
        console.log("Ganho bruto: " + somaB + 
            "Gastos anual: " + somaG +
            'saldo: ' + saldo +
            "Lucro");
    }else{
        console.log("Ganho bruto: " + somaB + 
            "Gastos anual: " + somaG +
            'saldo: ' + saldo +
            "Prejuízo");
    }

}


//4
function questao4(){
    let numero = []
    
    for(let i = 0; i < 4; i++){
        let nuberUs = parseFloat(prompt("Digite um numero:"))
        
        if(!isNaN(nuberUs)){
            numero.push(nuberUs);
        }
    }

    let orderNumber = [...numero].sort((a, b) => b-a);
    console.log('Numeros organizados: ' + orderNumber);
}

function questao5(){
    let numero = parseInt(prompt("Digite um número inteiro:"));

    console.log("Número digitado:", numero);

    if (numero % 2 === 0) {
        console.log("O número digitado é PAR");

        numero = numero + 1;
    } else {
        console.log("O número digitado é ÍMPAR");

        numero = numero + 1;
    }

    console.log("Número transformado:", numero);

    if (numero % 2 === 0) {
        console.log("O número transformado é PAR");
    } else {
        console.log("O número transformado é ÍMPAR");
    }

}

//5

function questao6(){
    let letra = prompt("Digite uma letra do alfabeto:");

    console.log("Letra digitada:", letra);

    if (letra === "a" || letra === "A" || letra === "e" || letra === "E" || letra === "i" || letra === "I" || letra === "o" || letra === "O" || letra === "u" || letra === "U") {
        console.log("A letra", letra, "é uma VOGAL");
    } else {
        console.log("A letra", letra, "é uma CONSOANTE");
    }
}

//6

function questao7(){
    let codigo = prompt(
    " Picoléteria \n" +
    "1 - Chocolate - R$ 1,50\n" +
    "2 - Morango - R$ 2,50\n" +
    "3 - Creme - R$ 2,50\n" +
    "4 - Manga - R$ 3,20\n" +
    "5 - Melancia - R$ 3,40\n" +
    "6 - Vanilla Ice - R$ 3,00\n" +
    "7 - Céu Azul - R$ 3,60\n" +
    "8 - Brownie - R$ 4,00\n" +
    "9 - Hawaiano - R$ 5,00\n\n" +
    "Digite o código do sabor:"
    );

    if (codigo === "1") {
        console.log("Sabor: Chocolate | Preço: R$ 1,50");
    } else if (codigo === "2") {
        console.log("Sabor: Morango | Preço: R$ 2,50");
    } else if (codigo === "3") {
        console.log("Sabor: Creme | Preço: R$ 2,50");
    } else if (codigo === "4") {
        console.log("Sabor: Manga | Preço: R$ 3,20");
    } else if (codigo === "5") {
        console.log("Sabor: Melancia | Preço: R$ 3,40");
    } else if (codigo === "6") {
        console.log("Sabor: Vanilla Ice | Preço: R$ 3,00");
    } else if (codigo === "7") {
        console.log("Sabor: Céu Azul | Preço: R$ 3,60");
    } else if (codigo === "8") {
        console.log("Sabor: Brownie | Preço: R$ 4,00");
    } else if (codigo === "9") {
        console.log("Sabor: Hawaiano | Preço: R$ 5,00");
    } else {
        console.log("Código inválido.");
    }

}

//7

function questao8(){
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

    console.log("Primeiro número:", num1);
    console.log("Segundo número:", num2);

    let diferenca = num1 - num2;
    console.log("Diferença:", num1, "-", num2, "=", diferenca);

    let dobro = 2 * num1;
    console.log("Dobro do primeiro número:", "2 *", num1, "=", dobro);

    let triplo = 3 * num2;
    console.log("Triplo do segundo número:", "3 *", num2, "=", triplo);

    let soma = dobro + triplo;
    console.log("Soma do dobro do primeiro com o triplo do segundo:", dobro, "+", triplo, "=", soma);

    let multiplicacao = num1 * num2;
    console.log("Multiplicação:", num1, "*", num2, "=", multiplicacao);

    console.log( "Resultado");
    console.log("Diferença:", diferenca);
    console.log("Dobro do primeiro + triplo do segundo:", soma);
    console.log("Multiplicação:", multiplicacao);

}

//8

function questao9(){
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    console.log("Primeiro número digitado:", num1);

    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
    console.log("Segundo número digitado:", num2);

    if (num1 > num2) {
        console.log("Ordem do maior para o menor:", num1, ",", num2);
    } else {
        console.log("Ordem do maior para o menor:", num2, ",", num1);
    }

}

//9

function questao10(){
    let nome = prompt("Digite o nome do funcionário:");
    console.log("Nome do funcionário:", nome);

    let salarioBruto = parseFloat(prompt("Digite o salário bruto:"));
    console.log("Salário bruto:", salarioBruto);

    let descontoINSS = salarioBruto * 0.08;
    console.log("Cálculo do desconto do INSS: 8% de", salarioBruto, "=", descontoINSS);

    let salarioLiquido = salarioBruto - descontoINSS;
    console.log("Cálculo do salário líquido:", salarioBruto, "-", descontoINSS, "=", salarioLiquido);

    console.log(" FOLHA DE PAGAMENTO ");
    console.log("Funcionário:", nome);
    console.log("Salário bruto: R$", salarioBruto);
    console.log("Desconto INSS: R$", descontoINSS);
    console.log("Salário líquido: R$", salarioLiquido);

}

//10

function questao11(){
   let salario = parseFloat(prompt("Digite o salário do funcionário:"));
    console.log("Salário informado: R$", salario);

    let taxa;

    if (salario <= 1000) {
        taxa = 0.08;
    } else if (salario <= 1500) {
        taxa = 0.085;
    } else {
        taxa = 0.09;
    }

    let desconto = salario * taxa;
    console.log("Cálculo do desconto:", salario, "*", taxa, "=", desconto);

    let salarioLiquido = salario - desconto;
    console.log("Cálculo do salário líquido:", salario, "-", desconto, "=", salarioLiquido);

    console.log("Folha de pagamento");
    console.log("Salário informado: R$", salario);
    console.log("Taxa de desconto aplicada:", taxa * 100 + "%");
    console.log("Valor do desconto: R$", desconto);
    console.log("Salário líquido: R$", salarioLiquido);

}