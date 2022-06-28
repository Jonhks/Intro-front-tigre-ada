// Condicional if

// if(condicion){
//   código a ejecutarse
// }

// const edad = prompt('Ingresa tu edad');

// const verificarEdad = (edad) => {
//   if(edad >= 18){
//     alert('Si te podemos vender bebias alcoholicas!! :)')
//   } else {
//     alert('No te podemos vender NADA  :/')
//   }
// };

// verificarEdad(edad);

// Necesitamos crear una funcion que nos muestre la promoción dependiendo la edad del usuario.... 18 - 25 => Promoción en cervezas 2 x 1.... 25 - 35 => Promo en whisky de 35 - 45 => promo en coñac y mayor a 45 => tequila;

// const edad = prompt('Ingresa tu edad!!');

// const mostrarPromos = edad => {
//   if(edad >= 18 && edad < 25){
//     alert('Tenemos promoción en las cervezas al 2 x 1 :)')
//   } else if(edad >= 25 && edad < 35){
//     alert('Tenemos promoción en el whisky con 40% de descuento :)')
//   } else if(edad >= 35 && edad < 45){
//     alert('Tenemos promoción en el coñac, te regalamos una hamburguesa :)')
//   } else if(edad >= 45){
//     alert('Tenemos promoción en el tequila, te regalamos la sangrita :)')
//   } else {
//     alert('No te podemos vender NADA !! :/')
//   }
// };

// mostrarPromos(edad);


// console.log(2 !== '2');

// Ciclos o bucles

// for(inicialización; limite; aumento){
//   código a ejecutarse
// }

// i++ 
// i = i + 1

const firstName = 'Alejandra';
const lastName = 'Mascambroni';
// index        012345678  posisción logica
const nombre = `${firstName} ${lastName}`;
// length       123456789   posición visual

// console.log(nombre[8]);

for(let i = 0; i < nombre.length; i++){
  // console.log('En la posición de: ',i, ' el Valor es: ',nombre[i])
  if(nombre[i] === 'x'){
    alert(`El nombre si tiene la letra que buscas, en la posición: ${i}`)
  } else {
    console.log('La letra que buscas NO se encuentra en la palabra')
  }
}


// i       console.log(i)  i = i + 1   nombre[i]
// 0              0           0           A
// 0              0           1           l
// 1              1           2           e
// 2              2           3           j
// 3              3           4           a
// 4