let objeto = {nombre: "Gaston", apellido:"Macias", edad: 38};
let jsonString = JSON.stringify(objeto);

let texto = "Mi objeto persona es el siguiente";
let objetoPersona = texto + jsonString;

console.log(objetoPersona)