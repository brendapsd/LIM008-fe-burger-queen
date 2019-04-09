export const pageOrder1 = () => {
    const template1 = `
    <section class="pedido" id="pedido">
      <h3>Pedido:</h3>
        <p>Cliente:</p>
        <table>
          <tr>
            <td><strong>Comida</strong></td>
            <td><strong>Precio</strong></td>
            <td><strong>Cantidad</strong></td>
          </tr>
          <tr>
            <td>Café Americano</td>
            <td>s/. 5.00</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>s/. 5.00</td>
          </tr>
        </table>
    </section>
    `; 
    const div1 = document.createElement('div'); 
    div1.innerHTML = template1;
    
    return div1
  };