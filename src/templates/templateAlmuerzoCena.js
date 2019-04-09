export const mostrarAlmuerzoCena = () => {
    const templateAlmuerzoCena = `
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
        <ul id="mostrar-pedido">
        </ul>
    `;
    const divAlmuerzoCena = document.createElement('div');
    divAlmuerzoCena.innerHTML = templateAlmuerzoCena; 
    return divAlmuerzoCena
}