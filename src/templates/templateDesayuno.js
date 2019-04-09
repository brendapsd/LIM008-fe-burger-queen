export const mostrarDesayuno = () => {
    const templateDesayuno = `
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
    </div> <br> 
        <button id="cafe-americano">Café americano s/.5</button>
        <button id="cafe-leche">Café con leche s/.7</button>
        <button id="sandwich">Sandwich de jamón y queso s/.10</button>
        <button id="jugo">Jugo de frutas natural s/.7</button>
    `; 
    const divDesayuno = document.createElement('div'); 
    divDesayuno.innerHTML = templateDesayuno;
    return divDesayuno 
}; 