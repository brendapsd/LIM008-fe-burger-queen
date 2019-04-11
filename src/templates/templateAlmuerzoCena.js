export const mostrarAlmuerzoCena = () => {
    const templateAlmuerzoCena = `
        <p>HAMBURGUESA</p>
            <button id="hamb-simple">Hamburguesa simple s/.10</button>
            <button id="hamb-doble">Hamburguesa doble s/.15</button>
            <p>Adicional</p>
              <button id="queso">Queso</button>
              <button id="huevo">Huevo</button>
        <p>ACOMPAÑAMIENTOS</p>
            <button id="papas">Papas fritas s/.5</button>
            <button id="aros">Aros de cebolla s/.5</button>
        <p>PARA TOMAR</p>
            <button id="agua5">Agua 500ml s/.5</button>
            <button id="agua7">Agua 750ml s/.7</button>
            <button id="gaseosa5">Bebida/gaseosa 500ml s/.7</button>
            <button id="gaseosa7">Bebida/gaseosa 750ml s/.10</button> 
    `;
    const divAlmuerzoCena = document.createElement('div');
    divAlmuerzoCena.setAttribute('id','contenedor-almuerzo-cena')
    divAlmuerzoCena.innerHTML = templateAlmuerzoCena; 
    return divAlmuerzoCena
}