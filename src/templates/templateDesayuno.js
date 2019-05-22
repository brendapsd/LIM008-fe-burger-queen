import { guardarPedidoArr, eliminarObj, arr } from "../controller/controller.js";

export const mostrarDesayuno = (obj) => {
  const templateDesayuno = `
        <button id="btn-${obj.id}" class="boton btn btn-success btn-lg">
        <span><img src="${obj.imagen}" alt="${obj.pedido}" width="150"></span>
        <span>${obj.pedido}</span>
        <span>s/.${obj.precio}</span>
        </button>
    `; 
    
  const divDesayuno = document.createElement('div'); 
  divDesayuno.setAttribute('id', 'contenedor-desayuno');
  divDesayuno.innerHTML = templateDesayuno;

  const pedidoAgregado = document.getElementById('pedido-agregado')
   
  const btnComida = divDesayuno.querySelector(`#btn-${obj.id}`);
  btnComida.addEventListener('click', () => {
    pedidoAgregado.innerHTML = ''
    let sumaTotal = 0
   guardarPedidoArr(obj).forEach(producto => {
     pedidoAgregado.appendChild(agregarPedido(producto))
     sumaTotal += producto.precio * producto.cantidad
   })
   document.querySelector('#suma-total').innerHTML = sumaTotal;
  })
  return divDesayuno 
}; 

export const agregarPedido = (obj) => {

  const templateAgregarPedido = `
            <td class="comida">${obj.pedido}</td>
            <td class="precio">s/.${obj.precio}</td>
            <td class="cantidad">
            <i class="cursor fas fa-minus mr-2 text-secondary"></i>
            <span class="badge badge-pill badge-success">${obj.cantidad}</span>
            <i class="cursor fas fa-plus ml-2 text-secondary"></i>
            </td>
            <td >s/.<span class="precioXcantidad">${obj.precio * obj.cantidad}</span></td>
            <td id="eliminar"><button class="btn btn-primary">x</button></td>
  `; 
  const divAgregarPedido = document.createElement('tr'); 
  
  divAgregarPedido.innerHTML = templateAgregarPedido; 

  const btnEliminar = divAgregarPedido.querySelector('#eliminar')

  btnEliminar.addEventListener('click', () => {
    divAgregarPedido.innerHTML = '';
    eliminarObj(arr)
  //   const idEliminar = obj.id; 
  //   const arrObj = guardarPedidoArr(obj)
  //   console.log(obj.cantidad)
  //   const getIndice = (idProducto) => {
  //     var indice = -1;
  //     arrObj.filter((producto, i) => {
  //         if (producto.id === idProducto) {
  //             indice = i;
  //         }
  //     });
  //     return indice;
  // }
  // arrObj.splice(getIndice(idEliminar), 1);
  // console.log(arrObj);
  // console.log(obj.cantidad)
  let restaTotal = Number(document.querySelector('#suma-total').innerHTML);
  // // console.log(restaTotal)
  // // console.log(typeof(restaTotal))
  // // arrObj.forEach(producto => {
  //   console.log(obj.precio * obj.cantidad) 
    
    restaTotal = (obj.precio * obj.cantidad) - restaTotal;
    console.log(restaTotal)
  // })
  document.querySelector('#suma-total').innerHTML = restaTotal;
  
  })

  return divAgregarPedido
}
