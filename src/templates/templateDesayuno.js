export const mostrarDesayuno = (obj, arrData) => {
  const templateDesayuno = `
        <button id="btn-${obj.id}" class="boton btn btn-success btn-lg">${obj.pedido} s/.${obj.precio}</button>
    `; 
    
  const divDesayuno = document.createElement('div'); 
  divDesayuno.setAttribute('id', 'contenedor-desayuno');
  divDesayuno.innerHTML = templateDesayuno;

  // const pedidoAgregado = document.getElementById('pedido-agregado')
  const arr = [];
  const guardarPedido = () => {
     arrData.forEach(elem => {
      arr.push({
        item: elem.pedido,
        price: elem.precio
       })
      //  console.log(arr)
      });
    console.log(arr)
    return arr
   }
   
  const btnComida = divDesayuno.querySelector(`#btn-${obj.id}`);
  btnComida.addEventListener('click', () => {
   guardarPedido()
  
  })
  return divDesayuno 
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
            <td id="eliminar"><button>x</button></td>
  `; 
  const divAgregarPedido = document.createElement('tr'); 
  
  divAgregarPedido.innerHTML = templateAgregarPedido; 

  return divAgregarPedido
}
