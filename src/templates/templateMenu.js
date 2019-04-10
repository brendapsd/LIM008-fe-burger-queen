// import { changeHash } from "../route.js";
import { mostrarDesayuno } from "./templateDesayuno.js";
import { mostrarAlmuerzoCena } from "./templateAlmuerzoCena.js";

const pageOrder1 = () => {
    const template1 = `
    <section id="pedido">
      <h3>Pedido:</h3>
        <p>Cliente:</p> <p id="nombre"></p>
        <table>
          <tr>
            <td><strong>Comida</strong></td>
            <td><strong>Precio</strong></td>
            <td><strong>Cantidad</strong></td>
            <td><strong>PxC</strong></td>
          </tr>
          <tr>
            <td>Café Americano</td>
            <td>s/. 5.00</td>
            <td></td>
          </tr>
          <tr>
            <td id="comida"></td>
            <td id="precio"></td>
            <td id="cantidad"></td>
            <td id="precio-total"></td>
          </tr>
          <tr>
            <td>Total del pedido:</td>
            <td></td>
            <td>s/. <p id="total"></p></td>
          </tr>
        </table>
        <button id="enviar-pedido">Enviar pedido</button>
    </section>
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
        menu.appendChild(mostrarDesayuno());
         
    });
    btnAlmuerzoCena.addEventListener('click', () => {
    //   menu.innerHTML = changeHash('/almuerzocena');  
        menu.appendChild(mostrarAlmuerzoCena());
    }); 
    
    div.appendChild(pageOrder1())
    
    return div
};
