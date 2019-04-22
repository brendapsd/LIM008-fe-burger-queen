export const mostrarPedido = () => {
    const template1 = `
      <h3>Pedido:</h3>
        <p>Cliente:</p> <p id="nombre"></p>
        <table class="table">
          <thead>
            <tr>
              <th>Comida</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>PxC</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody id="pedido-agregado">
          </tbody>
          <tfoot>
            <tr>
              <td>Total del pedido:</td>
              <td></td>
              <td></td>
              <td>s/. <p id="total"></p></td>
            </tr>
          </tfoot>
        </table>

        <button id="enviar-pedido" class="boton btn btn-danger btn-lg">Enviar pedido</button>

    `;
    const div1 = document.createElement('div'); 
    div1.setAttribute('id', 'pedido-cliente');
    div1.innerHTML = template1;
    
    return div1
  };