export const mostrarAlmuerzoCena = (obj) => {
    const templateAlmuerzoCena = `
        <button id="${obj.id}" class="btn btn-warning">${obj.pedido} s/.${obj.precio}</button>
    `;
    const divAlmuerzoCena = document.createElement('div');
    divAlmuerzoCena.setAttribute('id','contenedor-almuerzo-cena')
    divAlmuerzoCena.innerHTML = templateAlmuerzoCena; 
    console.log(divAlmuerzoCena) 

    return divAlmuerzoCena
}