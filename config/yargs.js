const optcrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descrición de la tarea por hacer'
    }
}

const optactualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descrición de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const optborrar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Borra una tarea de la lista'
    }

}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', optcrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optactualizar)
    .command('borrar', 'Borrar una tarea', optborrar)
    .help()
    .argv;

module.exports = {
    argv
}