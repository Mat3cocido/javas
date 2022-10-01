const gato = {
    nombre:"valiente",
    edad: 10,
    enemigos: ["agua", "perros"],
    duerme: true,
    otros: {
        amigos: ["cobarde", "fiel"],
        favoritos: {
                comidas: {
                    frio: "salmon",
                    caliente: "pollo"
            }
        }        
    },
    comer: function () {
        console.log('gato comiendo');
    }, 
    comerdos(alimento){
        /* forma resumida de la de arriba */
        console.log(`
            ${this.nombre} esta comiendo ${alimento}
            `); /* this hace referencia al objeto donde estamos trabajando sino me toma un global = error, no anda con fc flecha */
    }
};

gato.comer(); /* asi se ejecuta la funcion */

gato.comerdos('pez');

/* acceder a los valores de objetos (leer el objeto) */

console.log(gato.nombre);
console.log(gato["nombre"]);
console.log(gato["enemigos"][0]);

/* CRUD */

gato.color = "rojo";
gato.edad = 5;
delete gato.duerme;
console.log(gato);

/* propiedades  */

console.log(gato.hasOwnProperty("edad"));

if (gato.hasOwnProperty("nombre")) {
    gato.nombre = "flojera";
}

console.log(gato["nombre"]);

/* encadenar opcional  */
/* para que no salga error rojo*/

console.log(gato.favorito?.comidas.frio);

/* methodos con parentesis , propiedad sin */

const amigos = ["cobarde", "fiel"];
console.log(amigos);


/* FOR IN */

for(let propiedad in gato){
    console.log(gato[propiedad]);
}
console.log(Object.values(gato));
Object.values(gato).forEach((item) => console.log(item));