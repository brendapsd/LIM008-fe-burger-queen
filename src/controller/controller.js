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
 const obtenerObj = (obj) => {
    const objetoDesayuno = {
       id: obj.id,
       producto: obj.pedido,
       precio: obj.precio,
       cantidad: contador,
       PxC: obj.precio*contador
    }
  //  console.log(objetoDesayuno)
   return objetoDesayuno
 }; 

let arr = [];

// export const guardarPedidoArr = (objeto) => {
//     arr.push(obtenerObj(objeto))
//   console.log(arr)
//   return arr
//  }

export const guardarPedidoArr = (objeto) => {
  console.log(objeto.id !== objeto.id)
  console.log(objeto.id)
  if(objeto.id === objeto.id){
    arr.push(obtenerObj(objeto))
    console.log('bye')
  } else {
    console.log('holi');
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