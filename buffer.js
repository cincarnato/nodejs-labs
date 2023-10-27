

const texto = "hola";
const buffer = Buffer.from(texto, 'utf-8'); // 'utf-8' es la codificación de caracteres

//Vemos el buffer en su representacion hexadecimal
console.log(buffer);

//Vemos el buffer en su representacion de valores enteros
console.log(buffer[0]); // Esto imprimirá 104, que es el valor hexadecimal 0x68 en decimal
console.log(buffer[1]); // Esto imprimirá 111, que es el valor hexadecimal 0x6f en decimal
console.log(buffer[2]); // Esto imprimirá 108, que es el valor hexadecimal 0x6c en decimal
console.log(buffer[3]); // Esto imprimirá 97, que es el valor hexadecimal 0x61 en decimal

//Vemos el buffer en su representacion binaria
for (let i = 0; i < buffer.length; i++) {
    const binaryRepresentation = buffer[i].toString(2).padStart(8, '0'); // Convierte a binario de 8 bits
    const haxadecimalRepresentation = buffer[i].toString(16); // Convierte a hexadecimal
    const decimalRepresentation = buffer[i].toString(10); // Convierte a decimal
    console.log(binaryRepresentation, haxadecimalRepresentation,decimalRepresentation);
}
