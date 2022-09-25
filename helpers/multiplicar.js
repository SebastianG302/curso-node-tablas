const colors = require('colors')
const fs = require('fs');

const separador = ('============='.rainbow);

const crearArchivo = async (base, listar, hasta) => {

    let salida = '';

    for (i = 1; i <= hasta; i++) {
        salida += `${i} x ${base} = ${i * base}\n`;
    }

    if (listar){
        console.log(separador);
        console.log((`Tabla del ` + base.toString()));
        console.log(separador);
        console.log(salida);
    }
    
    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}`;
    } catch (error) {
        throw 'Error al escribir el documento'.red;
    }




}

module.exports = {
    crearArchivo
}