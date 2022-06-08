const visorAnterior = document.getElementById("visor-anterior");
const visorAtual = document.getElementById("visor-atual");

const botoesNumeros = document.querySelectorAll("number");
const botoesOperacoes = document.querySelectorAll("operator");

const botaoIgual = document.querySelector("equals");
const botaoApagar = document.querySelector("clear");
const botaoApagarTudo = document.querySelector("clearAll");



class visor {
    constructor(visorAnterior, visorAtual) {
        this.visorAnterior = visorAnterior;
        this.visorAtual = visorAtual;
        this.visorValorAtual = "";
        this.visorValorAnterior = "";
        this.tipoDeOperacao = undefined;
        this.apagar();
    }
}

formatVisorNumeros(number){
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];

    let integerVisor;

    if (isNaN(integerDigits)) {
        integerVisor = "";
    } else {
        integerVisor = integerDigits.toLocaleString("pt-br", {
            maximumFractionDigits: 0,
        });
    }

    if (decimalDigits != null) {
        return `${integerVisor}.${decimalDigits}`;
    } else {
        return integerVisor;
    }
}

apagar() {
    this.visorValorAtual = this.visorValorAtual.toString().slice(0.1);
    this.imprimirValores();
}

apagarTudo() {
    this.visorValorAtual = "";
    this.visorValorAnterior = "";
    this.tipoDeOperacao = operacao;
    this.imprimirValores();
}

calcular() {
    let result;
    const visorAtual = parseFloat(this.visorValorAtual);
    const visorAnterior = parseFloat(this.visorValorAnterior);

    if (isNaN(visorAtual) || isNaN(visorAnterior)) return;

    switch (this.operation) {
        case "+":
            result = visorAnterior + visorAtual;
            break
        case "-":
            result = visorAnterior - visorAtual;
            break
        case "/":
            result = visorAnterior / visorAtual;
            break
        case "*":
            result = visorAnterior * visorAtual;
            break
        case "√":
            result = Math.sqrt(visorAnterior);
            break
        /*case "%":
            result = (visorAnterior / 100) * valorAtual;
            break*/
        default:
            return;
    }
}

imprimirValores() {
    this.visorValorAnterior.textContent = this.visorAtual;
    this.visorValorAnterior.textContent = `${this.visorAnterior}
}
