let Aura = ["Aura", "+", "Ego"]
let Ego = [67, 67, 67]
console.log(Aura)
console.log(Ego)
//let FarmarAura = Aura + Ego
let FarmarAura = [...Aura,...Ego]
console.log(FarmarAura)



let NumerosArray = [1, 2, 3, 67, 5, 6, 7, 8]
let maiorNumber = Math.max(...NumerosArray)
console.log("Maior numero é: "+maiorNumber)





let objeto = {
    id: 67, 
    nome: 'Pedro', 
    funcao: 'Farmador de aura profissional'
}
console.log (objeto)
objeto.nome = 'Toninho Tornado'
console.log (objeto)




console.log("=================================================================")


let objeto2 = {nome: 'Arthur Lago', idade: 20}
let resultado2 = {...objeto, nome: "Arthur"}
console.log(resultado2)

