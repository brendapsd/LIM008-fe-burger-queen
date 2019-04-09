import { changeHash } from "../route.js";


export const mostrarDesayuno = () => {
    const templateDesayuno = `
        <button id="cafe-americano">Café americano s/.5</button>
        <button id="cafe-leche">Café con leche s/.7</button>
        <button id="sandwich">Sandwich de jamón y queso s/.10</button>
        <button id="jugo">Jugo de frutas natural s/.7</button>
    `; 
    const divDesayuno = document.createElement('div'); 
    divDesayuno.innerHTML = templateDesayuno;
    return divDesayuno 
}; 

export const mostrarAlmuerzoCena = () => {
    const templateAlmuerzoCena = `
        <p>HAMBURGUESA</p>
        <button id="hamb-simple">Hamburguesa simple s/.10</button>
        <button id="hamb-doble">Hamburguesa doble s/.15</button>
        <p>ACOMPAÑAMIENTOS</p>
        <button id="papas">Papas fritas s/.5</button>
        <button id="aros">Aros de cebolla s/.5</button>
        <p>PARA TOMAR</p>
        <button id="agua5">Agua 500ml s/.5</button>
        <button id="agua7">Agua 750ml s/.7</button>
        <button id="gaseosa5">Bebida/gaseosa 500ml s/.7</button>
        <button id="gaseosa7">Bebida/gaseosa 750ml s/.10</button> <br> <br> <br>
        <ul id="mostrar-pedido">
        </ul>
    `;
    const divAlmuerzoCena = document.createElement('div');
    divAlmuerzoCena.innerHTML = templateAlmuerzoCena; 
    return divAlmuerzoCena
}

export const pageOrder = () => {
    const template = `
    <header>
        <h1>BURGER QUEEN</h1>
    </header>
    <div id="menu">
        <h2>Menú</h2>
            <input id="name" type="text" placeholder="Nombre del cliente">
            <button id="btn-enviar">Enviar</button> <br> <br>
            <button id="desayuno">DESAYUNO</button> 
            <button id="almuerzo-cena">ALMUERZO Y CENA</button>
            <div id="menu"></div>
    </div>

    `; 
    const div = document.createElement('div'); 
    div.innerHTML = template;
    
    // const name = div.querySelector('#name').value; 
    const btnEnviar = div.querySelector('#btn-enviar');

    btnEnviar.addEventListener('click', () => {
      
    }); 

    const btnDesayuno = div.querySelector('#desayuno');
    const menu = div.querySelector('#menu'); 
    const btnAlmuerzoCena = div.querySelector('#almuerzo-cena');

    btnDesayuno.addEventListener('click', () => {
      menu.innerHTML = changeHash('/desayuno'); 
    });
    btnAlmuerzoCena.addEventListener('click', () => {
      menu.innerHTML = changeHash('/almuerzocena'); 
    }); 

    
    return div
};

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
  
  // const name = div1.querySelector('#name').value; 
  const btnEnviar = div1.querySelector('#btn-enviar');

  btnEnviar.addEventListener('click', () => {
    
  }); 
  return div1
};