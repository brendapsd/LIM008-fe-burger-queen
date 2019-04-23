import { guardarPedidoArr } from "../controller/controller.js";

export const mostrarDesayuno = (obj) => {
  const templateDesayuno = `
        <button id="btn-${obj.id}" class="boton btn btn-success btn-lg">${obj.pedido} s/.${obj.precio}</button>
    `; 
    
  const divDesayuno = document.createElement('div'); 
  divDesayuno.setAttribute('id', 'contenedor-desayuno');
  divDesayuno.innerHTML = templateDesayuno;

  const pedidoAgregado = document.getElementById('pedido-agregado')
   
  const btnComida = divDesayuno.querySelector(`#btn-${obj.id}`);
  btnComida.addEventListener('click', () => {
   guardarPedidoArr(obj).forEach(producto => {
     pedidoAgregado.appendChild(agregarPedido(producto))
   })
   btnComida.disabled = true; 
  //  console.log(contador)
  })
  return divDesayuno 
}; 

export const agregarPedido = (obj) => {
  console.log(obj)
  const templateAgregarPedido = `
            <td id="comida">${obj.producto}</td>
            <td id="precio">s/.${obj.precio}</td>
            <td id="cantidad">
            <i class="cursor fas fa-minus mr-2 text-secondary"></i>
            <span class="badge badge-pill badge-success">${obj.cantidad}</span>
            <i class="cursor fas fa-plus ml-2 text-secondary"></i>
            </td>
            <td id="precioXcantidad">s/.${obj.precio}</td>
            <td id="eliminar"><button>x</button></td>
  `; 
  const divAgregarPedido = document.createElement('tr'); 
  
  divAgregarPedido.innerHTML = templateAgregarPedido; 

  return divAgregarPedido
}
