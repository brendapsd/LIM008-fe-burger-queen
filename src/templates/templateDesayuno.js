// firebase.firestore().collection("menu").get().then((querySnapshot) => {
//   querySnapshot.docs.forEach((doc) => {
//   console.log(doc.data());
//   }); 
// });

export const agregarPedido = (obj) => {
  const templateAgregarPedido = `
            <td id="comida">${obj.comida}</td>
            <td id="precio">${obj.precio}</td>
            <td id="cantidad"></td>
            <td id="precioXcantidad">${obj.precio * cantidad}</td>
            <td id="eliminar"><button>x</button></td>
  `; 
  const divAgregarPedido = document.createElement('tr'); 
  
  divAgregarPedido.innerHTML = templateAgregarPedido; 

  return divAgregarPedido
}
export const mostrarDesayuno = (obj) => {
  // const templateDesayuno = `
  //       <button id="sandwich-${obj.id}" class="btn btn-success">${obj.pedido} ${obj.precio}</button>
  //       <button id="americano-${obj.id}" class="btn btn-success">${obj.pedido} ${obj.precio}</button>
  //       <button id="leche-${obj.id}" class="btn btn-success">${obj.pedido} ${obj.precio}</button>
  //       <button id="jugo-${obj.id}" class="btn btn-success">${obj.pedido} ${obj.precio}</button>
  //   `; 

  const templateDesayuno = `
        <div id="cont-btn"></div> 
    `; 
  
  const divDesayuno = document.createElement('div'); 
  divDesayuno.setAttribute('id', 'contenedor-desayuno');
  divDesayuno.innerHTML = templateDesayuno;
  
  const btnSandwich = divDesayuno.querySelector('#sandwich'); 
  btnSandwich.addEventListener('click', () => {
    // const pedidoAgregado = document.getElementById('pedido-agregado');
    // pedidoAgregado.appendChild(agregarPedido(objSandwich)); 
  }); 
  
  const btnCafeAmericano = divDesayuno.querySelector('#cafe-americano'); 
  btnCafeAmericano.addEventListener('click', () => {
    // const pedidoAgregado = document.getElementById('pedido-agregado');
    // pedidoAgregado.appendChild(agregarPedido(objCafeAmericano));  
  });


  return divDesayuno 
}; 
