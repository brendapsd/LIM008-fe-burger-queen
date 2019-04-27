export const dataMenu = (callback) =>
    firebase.firestore().collection('menu')
    .onSnapshot((querySnapshot) => {
        const arr = []; 
        querySnapshot.forEach((doc) => {
          arr.push({id: doc.id, ...doc.data()})
        });
        callback(arr)
    });

export const filtrarArrDesayuno = (arrObj) => {
  const arrObjDesayuno = arrObj.filter(objData => objData.comida.includes('desayuno')); 
  return arrObjDesayuno
}

export const filtrarArrAlmuerzoCena = (arrObj) => {
  const arrObjAlmuerzoCena = arrObj.filter(objData => objData.comida.includes('almuerzo-cena'));
  return arrObjAlmuerzoCena
}

//  let contador = 1; 
// export const obtenerObj = (obj) => {
//     const objetoDesayuno = {
//        id: obj.id,
//        producto: obj.pedido,
//        precio: obj.precio,
//        cantidad: 1,
//     }
//    return objetoDesayuno
//  }; 

let arr = [];

export const guardarNombreArr = () => {
  const name = document.querySelector('#name').value;    
  const nombre = document.querySelector('#nombre'); 
  arr.push(name)
  console.log(arr)
  nombre.innerHTML = name; 
}

// export const guardarPedidoArr = (objeto) => {
//     arr.push(obtenerObj(objeto))
//   console.log(arr)
//   return arr
//  }

export const guardarPedidoArr = (objeto) => {
  const objArr = arr.find(obj => obj.id === objeto.id)
  if(objArr === undefined){
    objeto.cantidad = 1
    arr.push(objeto)  
  } else {
    objeto.cantidad += 1
  }
  console.log(arr)
  return arr
}


// export const guardarLocalStorage = (obj) => {
//   localStorage.setItem('array pedido', JSON.stringify(obj));
// }

// guardarLocalStorage(); 

// export const obtenerLocalStorage = () => {
//   let pedido = JSON.parse(localStorage.getItem('pedido'));
//   console.log(pedido)
// }

// obtenerLocalStorage(); 