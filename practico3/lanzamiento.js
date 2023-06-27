//ejercicio con for y switch//

for(let i = 10; i >= 0; i--){
    switch (i){
        case 10:
            console.log("Cuenta regresiva 10")
            break
        case 0:
            console.log("Lanzamiento!")
            break
        default:
            console.log(i)
    }
}



// otra manera de hacerlo con while//

let cuentaRegresiva = 10;

console.log("Cuenta regresiva en 10")
while(cuentaRegresiva > 1){
    cuentaRegresiva = cuentaRegresiva -1
    console.log(cuentaRegresiva)
}
    console.log("Lanzamiento!")



