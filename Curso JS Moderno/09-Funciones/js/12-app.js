const carrito = [
    {nombre: "mojon", precio: "gratis campeon"},
    {nombre: "elgue", precio: "bito"},
    {nombre: "tv", precio: "carisimo"},
    {nombre: "mela", precio: "suda"},
    {nombre: "elbicho", precio: "siuuuuuuu"},
    {nombre: "mela", precio: "pela"}
]

const nuevoArreglo = carrito.forEach((producto) => {
    return `${producto.nombre } ${producto.precio}`
});

const nuevoArreglo2 = carrito.map ((producto)=> {
    return `${producto.nombre} ${producto.precio}`
});

console.log(nuevoArreglo2);
console.log(noevoArreglo);