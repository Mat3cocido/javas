
// switch

let nota = 3;

switch (nota) {
    case 5: 
        console.log("5");
        break;
    case 4: 
        console.log("4");
        break;
    case 3: 
        console.log("3");
        break;
    case 2: 
        console.log("2");
        break;
    case 1: 
        console.log("1");
        break;
    default:
        console.log("error")
        break
} 

// agregar un caso por defecto

//for

for (let i = 0; i < 10; i++ ){
    console.log(i)
}
let lista = [1, 2, 5, 6, 7, 8, 10, 800]
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])}

    for(let valor of lista) {
        console.log(valor)
    }

// foreach

lista.forEach(valor => {
    console.log(valor)
});

//  while   


let i = 1;
let max = 10;

while (i < 10) {
    console.log(i)
    i++
}

// funciones 

saludar("gonzalo")

function saludar(nombre) {  
    console.log(`hola ${nombre}`)
}

////

let persona = {
    nombre: "gonzalo",
    apellido: "pardo"
}

saludarpersona(persona)

function saludarpersona(objeto) {
    console.log(`hola ${objeto.nombre} ${objeto.apellido}`)
}

