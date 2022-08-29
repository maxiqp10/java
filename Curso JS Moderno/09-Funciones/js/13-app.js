const reproductor = {

    reproducir: function(id){

        console.log(`Reproduciendo cancion con el id ${id}`);

    },

    pausar: nombre => `Pausando la cancion ${nombre}`,

    agregarList: (nombre,nombreList)=> `agregnado la cancion ${nombre} a la lista ${nombreList}`,

    borrar: nombre => `borrando la cancion ${nombre}`
    


}

console.log(reproductor.pausar("movimiento naranja"));
console.log(reproductor.agregarList("guayando","rakata"));
console.log(reproductor.borrar("mk te odio"));
