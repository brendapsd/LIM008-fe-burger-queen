import { guardarPedidoArr } from "../controller/controller.js";

export const mostrarDesayuno = (obj) => {
  const templateDesayuno = `
        <button id="btn-${obj.id}" class="boton btn btn-success btn-lg">
        <span><img src="${obj.imagen}" alt="${obj.pedido}" width="200"></span>
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
    const idEliminar = obj.id; 
    let arrObj = guardarPedidoArr(obj)
    
    const getIndice = (idProducto) => {
      var indice = -1;
      arrObj.filter((producto, i) => {
          if (producto.id === idProducto) {
              indice = i;
          }
      });
      return indice;
  }
  arrObj.splice(getIndice(idEliminar), 1);
  console.log(arrObj);

  let restaTotal = Number(document.querySelector('#suma-total').innerHTML);
  console.log(restaTotal)
  // console.log(typeof(restaTotal))
  arrObj.forEach(producto => {
    restaTotal -= producto.precio * producto.cantidad
  })
  document.querySelector('#suma-total').innerHTML = restaTotal;
  
  })

  return divAgregarPedido
}
