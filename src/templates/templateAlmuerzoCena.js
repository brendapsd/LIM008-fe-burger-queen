export const mostrarAlmuerzoCena = () => {
    const templateAlmuerzoCena = `
        <p>HAMBURGUESA</p>
            <button id="hamb-simple" class="btn btn-warning">Hamburguesa simple s/.10</button>
            <button id="hamb-doble" class="btn btn-warning">Hamburguesa doble s/.15</button>
            <p>Adicional</p>
              <button id="queso" class="btn btn-warning">Queso</button>
              <button id="huevo" class="btn btn-warning">Huevo</button>
        <p>ACOMPAÑAMIENTOS</p>
            <button id="papas" class="btn btn-warning">Papas fritas s/.5</button>
            <button id="aros" class="btn btn-warning">Aros de cebolla s/.5</button>
        <p>PARA TOMAR</p>
            <button id="agua5" class="btn btn-warning">Agua 500ml s/.5</button>
            <button id="agua7" class="btn btn-warning">Agua 750ml s/.7</button>
            <button id="gaseosa5" class="btn btn-warning">Bebida/gaseosa 500ml s/.7</button>
            <button id="gaseosa7" class="btn btn-warning">Bebida/gaseosa 750ml s/.10</button> 
    `;
    const divAlmuerzoCena = document.createElement('div');
    divAlmuerzoCena.setAttribute('id','contenedor-almuerzo-cena')
    divAlmuerzoCena.innerHTML = templateAlmuerzoCena; 
    return divAlmuerzoCena
}