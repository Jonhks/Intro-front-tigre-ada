// Declaració de una función


// Ejecución de la función

// const resultadoDeLaSuma = suma() // 6

// console.log(resultadoDeLaSuma * 2)

// const nombre = 'Jonh';

// // Funcion flecha o arrow Function ES6
// const suma = () => {   //() => {}
//   const numero1 = 3;
//   const numero2 = 3;
//   const nombre = 'Micaela';
//   const resultado = numero1 + numero2;
//   // alert(resultado)
//   console.log(nombre)
//   return resultado;
// }

// suma()

// Funciones declaradas
// function suma(){    suma(){}
//   return 3 + 3;
// }

// funciones Expresadas

// const suma = function(){  function(){}
//   return 3 + 3;
// }

// const num1 = Number(prompt('Ingresa el primer número'));
// const num2 = Number(prompt('Ingresa el segundo número'));

// parametros
// const suma = (num1, num2) => {
//   const resultadoDeLaSuma = num1 + num2;
//   return `El resultado de la suma de ${num1} + ${num2} es: ${resultadoDeLaSuma}`;
// };

// argumentos
// const resultadoDeLaSuma = suma(num1, num2);

// console.log(suma(num1, num2));


// Crear una funcion que tome el nombre, apellido y anio de nacimiento del usuario y devuelva un saludo de su nombre + apellido y su edad;

// 1.- Crear mi funcion
// 2.- Pedirle al uasuario los datos
// 3.- Asegurar el tipo de dato
// 4.- Crear el mensaje con templateString
// 5.- Sacar la edad con anio - anio actual 2022 - 1986 = miEdad
// 6.- Retornar el mensaje

const nombre = prompt('Ingresa tu nombre');
const apellido = prompt('Ingresa tu apellido');
const anioNacimiento = Number(prompt('Ingresa tu año de nacimiento'));

// console.log( new Date().getFullYear())

// const saludar = (nombre, apellido, anioNacimiento) => {
//   const anioActual = new Date().getFullYear();
//   const edad = anioActual - anioNacimiento;
//   const mensaje = `Hola ${nombre} ${apellido}, tu edad es de ${edad} años`;
//   return mensaje;
// };

// console.log(saludar(nombre, apellido, anioNacimiento));

// saludar();
// alert();
// prompt();

console.log("Hola chicas y Jons")

// repaso variable

const profe = "Jons";

const dato = prompt("Hola, ingrese su nombre")

// Múltiplos

// Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO

// const primerNumero = prompt("Hola, ingrese el primer número")
// const segundoNumero = prompt("Ingrese el segundo número")

// alert con backsticks

// alert(`¿El valor ${primerNumero} es múltiplo de ${segundoNumero}? : ${ primerNumero % segundoNumero === 0 }`)

// alert con comillas dobles

// alert("¿El valor " + primerNumero + " es múltiplo de " + segundoNumero + "? : " + (primerNumero % segundoNumero === 0)  )