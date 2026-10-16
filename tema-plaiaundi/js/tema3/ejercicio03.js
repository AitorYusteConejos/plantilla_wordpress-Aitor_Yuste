/*
 * Tema 3 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Array de objetos
 */
const alumnos = [
    {nombre: "Ane", nota: 8},
    {nombre: "Iker", nota: 4},
    {nombre: "June", nota: 7}
];

function comprobarAprobado(alumno) {
    return{
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: alumno.nota >= 5
    };
}

const resultados = alumnos.map(comprobarAprobado)

console.log(resultados);