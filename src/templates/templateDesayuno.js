export const mostrarDesayuno = (obj) => {
  const templateDesayuno = `
        <button id="${obj.id}" class="btn btn-success">${obj.pedido} s/.${obj.precio}</button>
    `; 
    
  const divDesayuno = document.createElement('div'); 
  divDesayuno.setAttribute('id', 'contenedor-desayuno');
  divDesayuno.innerHTML = templateDesayuno;
  console.log(divDesayuno)
  
  return divDesayuno 
}; 

// export const agregarPedido = (obj) => {
//   const templateAgregarPedido = `
//             <td id="comida">${obj.comida}</td>
//             <td id="precio">${obj.precio}</td>
//             <td id="cantidad"></td>
//             <td id="precioXcantidad">${obj.precio * cantidad}</td>
//             <td id="eliminar"><button>x</button></td>
//   `; 
//   const divAgregarPedido = document.createElement('tr'); 
  
//   divAgregarPedido.innerHTML = templateAgregarPedido; 

//   return divAgregarPedido
// }
