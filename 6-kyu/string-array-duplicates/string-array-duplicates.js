function eliminarDuplicadosConsecutivos(palabra) {
    let resultado = "";
    for (let i = 0; i < palabra.length; i++) {
        if (i === 0 || palabra[i] !== palabra[i - 1]) {
            resultado += palabra[i];
        }
    }
    return resultado;
}
​
function dup(s) {
    return s.map(eliminarDuplicadosConsecutivos);
}
​
const palabras = ["Hhhhola", "muuuuundo", "coooode", "JaaaavaaaScript"];
console.log(dup(palabras));
​