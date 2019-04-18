export const mostrarDesayuno = (obj) => { 
  const templateDesayuno = `
        <button id="btn-${obj.id}" class="btn btn-success">${obj.pedido} s/.${obj.precio}</button>
    `; 
    
  const divDesayuno = document.createElement('div'); 
  divDesayuno.setAttribute('id', 'contenedor-desayuno');
  divDesayuno.innerHTML = templateDesayuno;

  // const pedidoAgregado = document.getElementById('pedido-agregado')
  
  const btnComida = divDesayuno.querySelector(`#btn-${obj.id}`);
  let arr = [];
  btnComida.addEventListener('click', () => {
    // const guardarPedidoArr = () => {
      
    //   const newArr = arr.push(obj)
    //   console.log(newArr);
    // }
    // console.log(arr)
    // pedidoAgregado.appendChild(guardarPedido(obj)); 
  })
  return divDesayuno 
}; 

export const agregarPedido = (obj) => {
  const templateAgregarPedido = `
            <td id="comida">${obj.pedido}</td>
            <td id="precio">s/.${obj.precio}</td>
            <td id="cantidad">
            <i class="cursor fas fa-minus mr-2 text-secondary"></i>
            <span class="badge badge-pill badge-success">1</span>
            <i class="cursor fas fa-plus ml-2 text-secondary"></i>
            </td>
            <td id="precioXcantidad">s/.${obj.precio}</td>
            <td id="eliminar"><button>x</button></td>
  `; 
  const divAgregarPedido = document.createElement('tr'); 
  
  divAgregarPedido.innerHTML = templateAgregarPedido; 

  return divAgregarPedido
}
