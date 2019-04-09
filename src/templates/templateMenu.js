import { changeHash } from "../route.js";

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
    
    const name = div.querySelector('#name').value; 
    const btnEnviar = div.querySelector('#btn-enviar');

    btnEnviar.addEventListener('click', () => {
      
    }); 

    const btnDesayuno = div.querySelector('#desayuno');
    // const menu = div.querySelector('#menu'); 
    const btnAlmuerzoCena = div.querySelector('#almuerzo-cena');

    btnDesayuno.addEventListener('click', () => {
      menu.innerHTML = changeHash('/desayuno'); 
    });
    btnAlmuerzoCena.addEventListener('click', () => {
      menu.innerHTML = changeHash('/almuerzocena'); 
    }); 

    
    return div
};
