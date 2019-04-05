const mostrarOrden = () => {
    const templatePedido = `
                            <p>Cliente: </p>
                        `;
    const divPedido = document.createElement('div');
    divPedido.innerHTML = templatePedido; 
}; 

const mostrarDesayuno = () => {
    const templateDesayuno = `
        <button id="cafe-americano">Café americano s/.5</button>
        <button id="cafe-leche">Café con leche s/.7</button>
        <button id="sandwich">Sandwich de jamón y queso s/.10</button>
        <button id="jugo">Jugo de frutas natural s/.7</button>
    `; 
    const divDesayuno = document.createElement('div'); 
    divDesayuno.innerHTML = templateDesayuno; 
}; 

const mostrarAlmuerzoCena = () => {
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
        <div id="mostrar-pedido">
        </div>
    `;
    const divAlmuerzoCena = document.createElement('div');
    divAlmuerzoCena.innerHTML = templateAlmuerzoCena; 
}

const pageOrder = () => {
    const template = `
                <h1>BURGER QUEEN</h1>
                <h2>Menú</h2>
                <input id="name" type="text" placeholder="Nombre del cliente">
                <button id="btn-enviar">Enviar</button> <br> <br>
                <button id="desayuno">DESAYUNO</button> 
                <button id="almuerzo-cena">ALMUERZO Y CENA</button>
                <div id="menu-desayuno">
                </div> 
                <div id="menu-alm-cena"> 
                </div>
                  `; 
    const div = document.createElement('div'); 
    div.innerHTML = template;
    // const name = document.querySelector('#name').value;
    const btnEnviar = div.querySelector('#btn-enviar');
    const mostrarPedido = div.querySelector('#mostrar-pedido');
    const btnDesayuno = div.querySelector('#desayuno');
    const menuDesayuno = div.querySelector('#menu-desayuno'); 
    const btnAlmuerzoCena = div.querySelector('#almuerzo-cena');
    const menuAlmuerzoCena = div.querySelector('#menu-alm-cena');

    btnEnviar.addEventListener('click', () => {    
        mostrarPedido.appendChild(mostrarOrden());
    });

    btnDesayuno.addEventListener('click', () => {
        menuDesayuno.appendChild(mostrarDesayuno());
    });

    btnAlmuerzoCena.addEventListener('click', () => {
        menuAlmuerzoCena.appendChild(mostrarAlmuerzoCena()); 
    });
    
    return div
};

export const mostrar = () => {
    const contenido = document.getElementById('contenido');
    contenido.appendChild(pageOrder());
}; 
