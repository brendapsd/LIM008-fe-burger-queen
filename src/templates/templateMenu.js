import { mostrarDesayuno } from "./templateDesayuno.js";
import { mostrarAlmuerzoCena } from "./templateAlmuerzoCena.js";
import { filtrarArrDesayuno, filtrarArrAlmuerzoCena } from "../controller/controller.js";

export const mostrarMenu = (arrObjData) => {
    const template = `
      <div id="menu">
          <h2>Menú</h2>
              <input id="name" class="input" type="text" placeholder="Nombre del cliente">
              <button id="btn-enviar" class="btn btn-primary">Enviar</button> <br> <br>
              <button id="desayuno" class="boton1 btn btn-primary  btn-lg">DESAYUNO</button> 
              <button id="almuerzo-cena" class="boton1 btn btn-primary  btn-lg">ALMUERZO Y CENA</button>
              <div id="botones-menu"></div>
      </div>
    `; 
    const div = document.createElement('div'); 
    div.setAttribute('id', 'pantalla');
    div.setAttribute('class', '.col-xl-8 .col-lg-8 .col-md-8')
    div.innerHTML = template;
   
    const btnEnviar = div.querySelector('#btn-enviar');
    btnEnviar.addEventListener('click', () => {
        const name = div.querySelector('#name').value;    
        const nombre = document.querySelector('#nombre'); 
        nombre.innerHTML = name; 
        // guardarNombreArr()
    }); 

    const btnDesayuno = div.querySelector('#desayuno');
    const btnAlmuerzoCena = div.querySelector('#almuerzo-cena');
    const menu = div.querySelector('#botones-menu');

    btnDesayuno.addEventListener('click', () => {
      menu.innerHTML = ''; 
      filtrarArrDesayuno(arrObjData).forEach(boton => {
        menu.appendChild(mostrarDesayuno(boton, arrObjData))
      })
      btnDesayuno.disabled = true;
      btnAlmuerzoCena.disabled = false; 
    });

    btnAlmuerzoCena.addEventListener('click', () => {
      menu.innerHTML = ''; 
    filtrarArrAlmuerzoCena(arrObjData).forEach(boton => {
      menu.appendChild(mostrarAlmuerzoCena(boton))
    })
    btnAlmuerzoCena.disabled = true;
    btnDesayuno.disabled = false; 
    }); 

    return div
};
