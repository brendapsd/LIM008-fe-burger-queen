export const objSandwich = {
  comida: 'Sandwich de jamón y queso',
  precio: 's/. '+ 10,
  cantidad: 2,
  precioXcantidad: 20
};

export const objCafeAmericano = {
  comida: 'Café americano',
  precio: 's/. '+ 5,
  cantidad: 1,
  precioXcantidad: 5
}; 

export const agregarPedido = (obj) => {
  const templateAgregarPedido = `
            <td id="comida">${obj.comida}</td>
            <td id="precio">${obj.precio}</td>
            <td id="cantidad">${obj.cantidad}</td>
            <td id="precioXcantidad">${obj.precioXcantidad}</td>
            <td id="eliminar"><button>x</button></td>
  `; 
  const divAgregarPedido = document.createElement('tr'); 
  
  divAgregarPedido.innerHTML = templateAgregarPedido; 
  
  return divAgregarPedido
}
export const mostrarDesayuno = () => {
  const templateDesayuno = `
      <p>Sandwich</p>
        <button id="sandwich">Sandwich de jamón y queso s/.10</button>
      <p>Bebida</p>
        <button id="cafe-americano">Café americano s/.5</button>
        <button id="cafe-leche">Café con leche s/.7</button>
        <button id="jugo">Jugo de frutas natural s/.7</button>
    `; 
  const divDesayuno = document.createElement('div'); 
  divDesayuno.setAttribute('id', 'contenedor-desayuno');
  divDesayuno.innerHTML = templateDesayuno;
  
  const btnSandwich = divDesayuno.querySelector('#sandwich'); 
  btnSandwich.addEventListener('click', () => {
    const pedidoAgregado = document.getElementById('pedido-agregado');
    pedidoAgregado.appendChild(agregarPedido(objSandwich));  
  }); 
  
  const btnCafeAmericano = divDesayuno.querySelector('#cafe-americano'); 
  btnCafeAmericano.addEventListener('click', () => {
    const pedidoAgregado = document.getElementById('pedido-agregado');
    pedidoAgregado.appendChild(agregarPedido(objCafeAmericano));  
  });


  return divDesayuno 
}; 
