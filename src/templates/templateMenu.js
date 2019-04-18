import { mostrarDesayuno } from "./templateDesayuno.js";
import { mostrarAlmuerzoCena } from "./templateAlmuerzoCena.js";

export const pageOrder1 = () => {
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

        <button id="enviar-pedido" class="btn btn-danger">Enviar pedido</button>

    `;
    const div1 = document.createElement('div'); 
    div1.setAttribute('id', 'pedido-cliente');
    div1.innerHTML = template1;
    
    return div1
  };

export const pageOrder = (arrObjData) => {
    const template = `
      <div id="menu">
          <h2>Menú</h2>
              <input id="name" type="text" placeholder="Nombre del cliente">
              <button id="btn-enviar" class="btn btn-primary">Enviar</button> <br> <br>
              <button id="desayuno" class="btn btn-primary">DESAYUNO</button> 
              <button id="almuerzo-cena" class="btn btn-primary">ALMUERZO Y CENA</button>
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
    const menu = div.querySelector('#botones-menu');

    //Filtrar la data por valor desayuno
    const arrObjDesayuno = arrObjData.filter(objData => objData.comida.includes('desayuno')); 
    const botonesDesayuno = () => {
      arrObjDesayuno.forEach(boton => {
        menu.appendChild(mostrarDesayuno(boton))
      });
    }

    btnDesayuno.addEventListener('click', () => {
      menu.innerHTML = ''; 
      botonesDesayuno()
      btnDesayuno.disabled = true;
      btnAlmuerzoCena.disabled = false; 
    });

    //Filtrar la data por valor almuerzo-cena
    const arrObjAlmuerzoCena = arrObjData.filter(objData => objData.comida.includes('almuerzo-cena')); 
    const botonesAlmuerzoCena = () => {
      arrObjAlmuerzoCena.forEach(boton => {
        menu.appendChild(mostrarAlmuerzoCena(boton))
      });
    }

    btnAlmuerzoCena.addEventListener('click', () => {
      menu.innerHTML = ''; 
      botonesAlmuerzoCena()
    btnAlmuerzoCena.disabled = true;
    btnDesayuno.disabled = false; 
    }); 

    return div
};
