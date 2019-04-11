// import { changeHash } from "../route.js";
import { mostrarDesayuno } from "./templateDesayuno.js";
import { mostrarAlmuerzoCena } from "./templateAlmuerzoCena.js";

export const pageOrder1 = () => {
    const template1 = `
      <h3>Pedido:</h3>
        <p>Cliente:</p> <p id="nombre"></p>
        <table>
        <caption>Pedidos</caption>
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
              <td>s/. <p id="total"></p></td>
            </tr>
          </foot>
        </table>
        <button id="enviar-pedido">Enviar pedido</button>
    `;
    const div1 = document.createElement('div'); 
    div1.setAttribute('id', 'pedido-cliente');
    div1.innerHTML = template1;
    
    return div1
  };

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
              <div id="botones-menu"></div>
      </div>
    `; 
    const div = document.createElement('div'); 
    div.setAttribute('id', 'pantalla');
    div.innerHTML = template;
   
    const btnEnviar = div.querySelector('#btn-enviar');

    btnEnviar.addEventListener('click', () => {
        const name = div.querySelector('#name').value;    
        const nombre = document.querySelector('#nombre'); 
        nombre.innerHTML = name; 
    }); 

    const btnDesayuno = div.querySelector('#desayuno');
    const btnAlmuerzoCena = div.querySelector('#almuerzo-cena');
    const menu = div.querySelector('#botones-menu')

    btnDesayuno.addEventListener('click', () => {
    //   menu.innerHTML = changeHash('/desayuno'); 
      const ultimoHijo = document.getElementById('contenedor-almuerzo-cena');
      menu.appendChild(mostrarDesayuno());    
      menu.removeChild(ultimoHijo);  
    });
    btnAlmuerzoCena.addEventListener('click', () => {
    //   menu.innerHTML = changeHash('/almuerzocena'); 
      const ultimoHijo = document.getElementById('contenedor-desayuno'); 
        menu.removeChild(ultimoHijo); 
        menu.appendChild(mostrarAlmuerzoCena());
    }); 

    return div
};
