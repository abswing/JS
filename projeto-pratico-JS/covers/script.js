//let  define uma varialvel .
// tipos de variaveis.

// let idade = 16 // tipo string

// let logado = true //tipo  boolean

// array e objetos 


// let ingredientes = ["farinha", "agua", "corante"]

// let personagem = {
//     nome: "fulano",
//     forca: 200,
//     nivel: 10,
//     magia: 300,
//     vida: 1000,
// }

// function somar(a, b){
//     let resutado = a * b;
//     return resutado
// }

// let x = somar(4, 5)

// console.log(x)


//  ==   é uma comparacao para ver se é igual 
//  !=   é para ver se diferente a comparacao
//  >    é Maior que a comparacao
//  <    é Menor que a comparacao
//  >=   é maior ou igual a comparacao
//  <=   é menor ou igual a comparacao


// for significa "PARA" 

// let lista = [10, 20, 30, 40 ]

// for( let item of lista) {
//     console.log(item)
// }

//cria um aviso na pagina ao passar em cima do bontao ou clicar
function avisar(){
    alert("opa, dispaarei!")
}

// faz que document passa a ser botao
let botao = document.querySelector("#botao")

// faz que ao passar no botao da pagina apareça um aviso 
botao.addEventListener("mouseover", () => {
    avisar()
})

// let usdInput = document.querySelector("#usd")
// let brlInput = document.querySelector("#brl")


// //faz com que apareça os vLORES digitado no input no console
// usdInput.addEventListener("keyup", () => {
//     console.log(usdInput.value)
// })

// // faz que acada tecla clicada no input apareca que esta clicando 
// brlInput.addEventListener("keyup", () => {
//     console.log("apertou no campo BRL")
// })

let dolar = 5.70

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1000,00"
convert("usd-to-brl")

//função 
function formatCurrency(value){
    //ajustar o valor
    let fixedValue = fixValue(value)
    // utilizar a funcao de formatar
    let options ={
        useGrouping: false,
        minimumFractionDigits: 2 
    }
    // retorna o valor formatado 
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)

}

function fixValue(value){
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if(floatValue == NaN) {
        floatValue = 0 
    }
    return floatValue
}

function convert(type){
    if(type == "usd-to-brl" ){
        //ajusta o valor
        let fixedValue = fixValue(usdInput.value)
        //coverte o valor
        let resutado = fixedValue *dolar
        resutado = resutado.toFixed(2)
        //mostra no campo de real
        brlInput.value = formatCurrency(resutado)
    }

    if(type == "brl-to-usd"){
        //ajusta o valor
        let fixedValue = fixValue(brlInput.value)

        // converte o valor
        let resutado = fixedValue / dolar
        resutado = resutado.toFixed(2)
        //mostra no campo de dolar
        usdInput.value = formatCurrency(resutado)
    }
}