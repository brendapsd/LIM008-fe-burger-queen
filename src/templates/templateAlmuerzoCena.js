export const mostrarAlmuerzoCena = (obj) => {
    const templateAlmuerzoCena = `
        <button id="btn-${obj.id}" class="boton btn btn-warning btn-lg">${obj.pedido} s/.${obj.precio}</button>
    `;
    const divAlmuerzoCena = document.createElement('div');
    divAlmuerzoCena.setAttribute('id','contenedor-almuerzo-cena')
    divAlmuerzoCena.innerHTML = templateAlmuerzoCena; 
    
    const pedidoAgregado = document.getElementById('pedido-agregado')
  
    const btnComida = divAlmuerzoCena.querySelector(`#btn-${obj.id}`);
    btnComida.addEventListener('click', () => {
        console.log(obj)
        pedidoAgregado.appendChild(agregarPedido(obj)); 
    })
  
    return divAlmuerzoCena
};

export const agregarPedido = (obj) => {
    const templateAgregarPedido = `
              <td id="comida">${obj.pedido}</td>
              <td id="precio">s/.${obj.precio}</td>
              <td id="cantidad">
              <i class="cursor fas fa-minus mr-2 text-secondary"></i>
              <span class="badge badge-pill badge-warning">1</span>
              <i class="cursor fas fa-plus ml-2 text-secondary"></i>
              </td>
              <td id="precioXcantidad">s/.${obj.precio}</td>
              <td id="eliminar"><button>x</button></td>
    `; 
    const divAgregarPedido = document.createElement('tr'); 
    
    divAgregarPedido.innerHTML = templateAgregarPedido; 
  
    return divAgregarPedido
  }; 