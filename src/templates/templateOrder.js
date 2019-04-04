const pageOrder = () => {
    const template = `
            <div> 
                <h1>holaaaa</h1>
                <button>Café americano</button>
            </div>
                  `;
    const div = document.createElement('div');
    div.innerHTML = template;
    return div
};

export const mostrar = () => {
    const contenido = document.getElementById('contenido');
    contenido.appendChild(pageOrder());
}
