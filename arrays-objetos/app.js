// const alumna1 = 'Mica';
// const alumna2 = 'Maria de los Angeles';
// const alumna3 = 'Cecilia';


// // Posición visual           1       2         3          4        5    6     7       8       9         10
// const listaEstudiantes = ['Mica', 'Maria', 'Cecilia', 'Hannah', 'Caro', 12, true, undefined, null, [1,2,3,4,5]];
// // Posición Lógica           0       1         2          3        4    5     6       7        8         9


// console.log(listaEstudiantes)

// listaEstudiantes.push('Nuevo valor')

// console.log(listaEstudiantes)

// for(let i = 0; i < listaEstudiantes.length; i++){   // i = i + 1
  // console.log(listaEstudiantes[i])
  // console.log(i)
// }

// console.log(listaEstudiantes[0])
// console.log(listaEstudiantes[1])
// console.log(listaEstudiantes[2])
// console.log(listaEstudiantes[3])
// console.log(listaEstudiantes[4])
// console.log(listaEstudiantes[5])
// console.log(listaEstudiantes[6])
// console.log(listaEstudiantes[7])
// console.log(listaEstudiantes[8])
// console.log(listaEstudiantes[9])

//Tenemos que hacer una funcion que tome un arr de numeros y divida en dos arreglos los numeros mayores a 10 y en el otro los numeros menores a 10;


// const arregloNumeros = [5, 36, 12, 8, 9, 4, 69, 45, 78, 4, 1, 0, 3, 47];
// const numerosMayores = [];
// const numerosMenores = [];


// const separadora = arr => {
//   for(let i = 0; i < arr.length; i++){
//     const valorActual = arr[i]
//     if(valorActual >= 10){
//       numerosMayores.push(valorActual)
//     } else {
//       numerosMenores.push(valorActual)
//     }
//   }
// }

// separadora(arregloNumeros);
// console.log(numerosMayores);
// console.log(numerosMenores);


// const palabra = 'Hace mucho frio';


// const encontrarVocales = str => {
//   for(let i = 0; i < str.length; i++){
//     const valorActual = str[i];
//     if( valorActual === 'a' || valorActual === 'e' || valorActual === 'i' || valorActual === 'o' || valorActual === 'u') {
//       console.log(`La letra ${valorActual}, es una Vocal`)
//     } else {
//       console.log(`La letra ${valorActual}, es una Consonante`)
//     }
//   }
// }

// encontrarVocales(palabra);


// const esHrValida = str => Number(str.slice(0,2)) < 24 && Number(str.slice(3,5)) < 60


// console.log(esHrValida('12:60'))
// console.log(esHrValida('14:59'))
// console.log(esHrValida('54:59'))
// console.log(esHrValida('17:61'))
// console.log(esHrValida('21:19'))




// Objetos

// const listAlumnas = ["Caro", "Hannah", "Alejandra", {}]; []

  // listaAlumnas[0]

// {}

const alumnasTigre = [
  {  
    nombre: 'Carola',
    apellido: 'Lerner',
    edad: 25,
    esEstudiante: false,
    estatura: 1.68,
    promedio: 9.9,
    valorNull: null,
    valorUndefined: undefined,
    alumnasDeCaro: ["Maria", "Alejandra", "Ceci"],
    mascota:{
      nombre: 'Hideo Kojima',
      color: 'negro',
      edad: 4,
      crias: ["Firulais", "Panka"]
    }
  },
  {  
    nombre: 'Alejandra',
    apellido: 'Mascabroni',
    edad: 29,
    esEstudiante: true,
    estatura: 1.78,
    promedio: 10,
    valorNull: null,
    valorUndefined: undefined,
    alumnasDeCaro: [],
    mascota:{
      nombre: 'Solovino',
      color: 'blanco',
      edad: 3,
      crias: []
    }
  }
]


console.log(alumnasTigre[0].mascota.crias[1])

