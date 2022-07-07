// getElementsByTagName nos trae un arreglo con todas las etiquetas que encuentre
// console.log(document.getElementsByTagName('p'))

// document.getElementsByClassName() Nos trae los elementos que contengan una clase

// console.log(document.getElementsByClassName('parrafo'))

// document.getElementById() el elemnto que coincida con el id

// console.log(document.getElementById('segundo'))


// este se encarga de traernos por etqueta, por clase o por id

// console.log(document.querySelectorAll('p'))
// console.log(document.querySelectorAll('.parrafo'))
// console.log(document.querySelectorAll('#segundo'))


// este funciona similar al getElementById

// console.log(document.querySelector('p'))
// console.log(document.querySelector('.parrafo'))
// console.log(document.querySelector('#segundo'))

// const titulo = document.getElementById('titulo');
// titulo.style.color = 'red';
// titulo.style.fontSize = '12px';
// titulo.style.backgroundColor = 'black';
// titulo.style.fontFamily = "Sans";
// titulo.style.alignItems = "center";

// titulo.classList.add('prueba');

// const quitarClase = document.getElementById('quitar-clase');

// quitarClase.classList.remove('prueba')

// titulo.classList.toggle('prueba');
// quitarClase.classList.toggle('prueba')



// Eventos 

// const saludar = () => {
//   alert('Hola chicas, bienvenidas!! :)')
// }



// 1.- Trer el elemento
// 2.- Darle el evento al elemento
// 3.- Definir la accion que dispara el evento

// const body = document.getElementById('body');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', (event) => {
//   console.log(event.target.id)
//   // body.classList.toggle('dark')
// });

// const parrafos = document.getElementsByClassName('parrafos');
// const cajita = document.getElementById('cajita');
// const todosParrafos = document.getElementById('todos-parrafos')

// for( let i = 0; i < parrafos.length; i++){
//   parrafos[i].addEventListener('click', (event) => {
//     if(event.target.id === 'cancun'){
//       todosParrafos.style.display = 'none';
//       setTimeout(() => {
//         todosParrafos.style.display = 'block';
//       }, 3000)
//       cajita.innerHTML = 'Cancun tiene las playas mas cristalinas de méxico'
//     } else if(event.target.id === 'las-vegas'){
//       todosParrafos.style.display = 'none';
//       setTimeout(() => {
//         todosParrafos.style.display = 'block';
//       }, 3000)
//       cajita.innerHTML = 'En las Las vegas tienen los mejores casinos'
//     }
//   })
// }
// const nombre = prompt('Ingresa tu nombre');





// const inputNombre = document.getElementById('nombre');

// inputNombre.addEventListener('input', (event) => {
//   const mensaje = `<p>Hola ${event.target.value} Binvenid@</p>`;
//   cajita.innerHTML = mensaje; 
// })



const login = document.getElementById('login');
const usuario = document.getElementById('usuario');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btn-login');
const home = document.getElementById('home');
const error = document.getElementById('error');
const longitudUser = document.getElementById('longitud-user');

const user = 'admin';
const passwordUser = '123123';

usuario.addEventListener('keydown', (event) => {
  console.log(event.key)
})

// btnLogin.addEventListener('click', () => {

// })

// btnLogin.addEventListener('click', () => {
//   const valueUser = usuario.value;
//   const valuePassword = password.value
//   if(valueUser === user && valuePassword === passwordUser){
//     login.classList.toggle('oculto');
//     home.classList.toggle('oculto');
//   } else {
//     setTimeout(() => {
//       error.classList.toggle('oculto')
//     },3000)
//     error.classList.toggle('oculto')
//   }
// })

// usuario.addEventListener('input', () => {
//   if(usuario.value.length < 8){
//     longitudUser.classList.remove('oculto')
//   } else {
//     longitudUser.classList.add('oculto')
//   }
// })


