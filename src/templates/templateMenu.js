import { mostrarDesayuno } from "./templateDesayuno.js";
import { mostrarAlmuerzoCena } from "./templateAlmuerzoCena.js";

export const mostrarMenu = (arrObjData) => {
    const template = `
      <div id="menu">
          <h2>Menú</h2>
              <input id="name" class="input" type="text" placeholder="Nombre del cliente">
              <button id="btn-enviar" class="btn btn-primary">Enviar</button> <br> <br>
              <button id="desayuno" class="boton btn btn-primary  btn-lg">DESAYUNO</button> 
              <button id="almuerzo-cena" class="boton btn btn-primary  btn-lg">ALMUERZO Y CENA</button>
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
        menu.appendChild(mostrarDesayuno(boton, arrObjDesayuno))
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
