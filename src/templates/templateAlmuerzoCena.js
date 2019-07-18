import { guardarPedidoArr, eliminarObj, arr } from "../controller/controller.js";

export const mostrarAlmuerzoCena = (objs) => {
    const templateAlmuerzoCena = `
        <button id="btn-${objs.id}" class="boton btn btn-success btn-lg">
        <span><img src="${objs.imagen}" alt="${objs.pedido}" width="100"></span>
        <span>${objs.pedido}</span>
        <span>s/.${objs.precio}</span>
        </button>
    `;
    const divAlmuerzoCena = document.createElement('div');
    divAlmuerzoCena.setAttribute('id','contenedor-almuerzo-cena')
    divAlmuerzoCena.innerHTML = templateAlmuerzoCena; 
    
    const pedidoAgregado = document.getElementById('pedido-agregado')
  
    const btnComida = divAlmuerzoCena.querySelector(`#btn-${objs.id}`);
    btnComida.addEventListener('click', () => {
        pedidoAgregado.innerHTML = ''
        let sumaTotal = 0
        guardarPedidoArr(objs).forEach(producto => {
        pedidoAgregado.appendChild(agregarPedido(producto))
        sumaTotal += producto.precio * producto.cantidad
        })
        document.querySelector('#suma-total').innerHTML = sumaTotal;
    })
  
    return divAlmuerzoCena
};

export const agregarPedido = (obj) => {
    const templateAgregarPedido = `
              <td id="comida">${obj.pedido}</td>
              <td id="precio">s/.${obj.precio}</td>
              <td id="cantidad">
              <i class="cursor fas fa-minus mr-2 text-secondary"></i>
              <span class="badge badge-pill badge-success">${obj.cantidad}</span>
              <i class="cursor fas fa-plus ml-2 text-secondary"></i>
              </td>
              <td id="precioXcantidad">s/.${obj.precio}</td>
              <td id="eliminar"><button class="btn btn-danger">x</button></td>
    `; 
    const divAgregarPedido = document.createElement('tr'); 
    
    divAgregarPedido.innerHTML = templateAgregarPedido; 

    const btnEliminar = divAgregarPedido.querySelector('#eliminar')

    btnEliminar.addEventListener('click', () => {
        divAgregarPedido.innerHTML = '';
        eliminarObj(arr)

        let restaTotal = Number(document.querySelector('#suma-total').innerHTML);
    
        restaTotal = restaTotal - (obj.precio * obj.cantidad);
        console.log(restaTotal)

        document.querySelector('#suma-total').innerHTML = restaTotal;

    })
  
    return divAgregarPedido
  }; 