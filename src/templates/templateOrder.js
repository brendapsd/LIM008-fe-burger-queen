const pageOrder = () => {
    const template = `
                <h1>BURGER QUEEN</h1>
                <h2>Menú</h2>
                <div>
                    <button id="desayuno">DESAYUNO</button> <br> <br>
                    <button id="cafe-americano">Café americano s/.5</button>
                    <button id="cafe-leche">Café con leche s/.7</button>
                    <button id="sandwich">Sandwich de jamón y queso s/.10</button>
                    <button id="jugo">Jugo de frutas natural s/.7</button>
                </div> <br>
                <div> 
                    <button id="almuerzo-cena">ALMUERZO Y CENA</button>
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
                    <button id="gaseosa7">Bebida/gaseosa 750ml s/.10</button>
                </div>
                  `;
    const div = document.createElement('div')
    div.innerHTML = template;
    div
        .querySelector('#cafe-americano')
        .addEventListener('click', () => {
            const template1 = `<p>Café americano --> 5</p>`; 
            const div1 = document.createElement('div')
            return div1.innerHTML = template1; 
        }); 
    return div
};

export const mostrar = () => {
    const contenido = document.getElementById('contenido');
    contenido.appendChild(pageOrder());
}
