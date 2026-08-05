let objeto1 = ["Masã", "Pêssêgo", "Marmão"] 
let objeto2 = ["Menlância", "Laraja", "Abate"]
let ArrayObjetos = [objeto1, objeto2]

const ArrayObjetos2 = [
                    {nome: "Jeferson", ano: 2022},
                    {nome: "Roberto", ano: 2024},
                    {nome: "Gilberto", ano: 2021},
                    {nome: "Otavio", ano: 2023},

]   

ArrayObjetos2.map((coiso) => {
    console.log("Nome:",coiso.nome," ",coiso.ano)
    //console.log("Nome:" + coiso.nome + " " + coiso.ano)
})


console.log("=====================================")

ArrayObjetos2.map((coiso, indice) => {
    console.log("Indice: " + indice + " Nome:",coiso.nome," ",coiso.ano)
    //console.log("Nome:" + coiso.nome + " " + coiso.ano)
})

const coisosFiltados = ArrayObjetos2.filter((coiso) => coiso.ano > 2022) 
console.log("=====================================")
console.log("Filtro: ")
console.log(coisosFiltados)

const coisosFind = ArrayObjetos2.find((coiso) => coiso.nome === "Gilberto")
console.log("=====================================")
console.log("Find:")
console.log(coisosFind)
console.log("=====================================")
