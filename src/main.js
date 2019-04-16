import { initRouterBurgerQueen } from "./route.js";

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyB9BWRfMzNRshr9VKHK7ZBGzeoJQLp4s7Y",
  authDomain: "burger-queen-bd9b9.firebaseapp.com",
  databaseURL: "https://burger-queen-bd9b9.firebaseio.com",
  projectId: "burger-queen-bd9b9",
  storageBucket: "burger-queen-bd9b9.appspot.com",
  messagingSenderId: "632783394554"
};
firebase.initializeApp(config);

const inicializa = () => {
  initRouterBurgerQueen();
}

window.addEventListener('load', inicializa)

export const dataMenu = firebase.firestore().collection('menu').get().then((querySnapshot) => {
  let arr = []; 
  querySnapshot.forEach((doc) => {
    arr.push({id: doc.id, ...doc.data()})
      // console.log(doc.id, doc.data());
  });
  console.log(arr)
  return arr
});
