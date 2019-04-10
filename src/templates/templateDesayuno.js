export const mostrarDesayuno = () => {
  const templateDesayuno = `
      <p>Sandwich</p>
        <button id="sandwich">Sandwich de jamón y queso s/.10</button>
      <p>Bebida</p>
        <button id="cafe-americano">Café americano s/.5</button>
        <button id="cafe-leche">Café con leche s/.7</button>
        <button id="jugo">Jugo de frutas natural s/.7</button>
        <div id="hola"></div>
    `; 
  const divDesayuno = document.createElement('div'); 
  divDesayuno.innerHTML = templateDesayuno;
  
  const btnSandwich = document.querySelector('#sandwich'); 
  btnSandwich.addEventListener('click', () => {
    console.log('hola')
  }); 

  return divDesayuno 
}; 