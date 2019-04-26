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

 let contador = 1; 
export const obtenerObj = (obj) => {
  //  console.log(obj)
    const objetoDesayuno = {
       id: obj.id,
       producto: obj.pedido,
       precio: obj.precio,
       cantidad: contador,
       PxC: obj.precio * contador
    }
  //  console.log(objetoDesayuno.cantidad)
   return objetoDesayuno
 }; 

let arr = [];

// export const guardarPedidoArr = (objeto) => {
//     arr.push(obtenerObj(objeto))
//   console.log(arr)
//   return arr
//  }

export const guardarPedidoArr = (objeto) => {
// console.log(objeto)
  const elemArr = arr.find(element => element.id === objeto.id)
// console.log(elemArr) 
  if(elemArr === undefined){
    arr.push(objeto)  
  } else {
    // console.log('soy cantidad '+ objeto.cantidad)
    console.log(arr.map(element => element.cantidad++)); 
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