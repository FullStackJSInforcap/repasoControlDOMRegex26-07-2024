// DOM - Document Object Model
// document.getElementById();
let contenedor = document.querySelector('div');
contenedor.innerHTML = '<div><h1> Agregado desde JS </h1></div>';
// esto cambia en base a evento doble click
contenedor.addEventListener('dblclick', function(){
    let tituloPrincipal = document.querySelector('h1');
    tituloPrincipal.innerHTML = 'esto cambia en base a evento doble click';
});