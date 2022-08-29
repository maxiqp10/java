const carrito = [
    {nombre: "mojon", precio: "gratis campeon"},
    {nombre: "elgue", precio: "bito"},
    {nombre: "tv", precio: "carisimo"},
    {nombre: "mela", precio: "suda"},
    {nombre: "elbicho", precio: "siuuuuuuu"},
    {nombre: "mela", precio: "pela"}
]

for (let x = 0; x < carrito.length; x++) {
    
    console.log(`${carrito[x].nombre} - Precio: ${carrito[x].precio}`);
    
}

carrito.forEach( function (producto) {
     console.log(`${producto.nombre } ${producto.precio}`);
}); 

console.log("================================================");

const nuevoArreglo = carrito.forEach( function (producto) {
    return `${producto.nombre } ${producto.precio}`
});

const nuevoArreglo2 = carrito.map (function(producto){
    return `${producto.nombre} ${producto.precio}`
});

console.log(nuevoArreglo2);
console.log(noevoArreglo);
