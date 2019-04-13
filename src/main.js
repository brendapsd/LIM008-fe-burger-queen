import { initRouterBurgerQueen } from "./route.js";

const inicializa = () => {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9BWRfMzNRshr9VKHK7ZBGzeoJQLp4s7Y",
    authDomain: "burger-queen-bd9b9.firebaseapp.com",
    databaseURL: "https://burger-queen-bd9b9.firebaseio.com",
    projectId: "burger-queen-bd9b9",
    storageBucket: "burger-queen-bd9b9.appspot.com",
    messagingSenderId: "632783394554"
  };
  var app = firebase.initializeApp(config);
  console.log(app)
  // let db = firebase.firestore();

  // db.collection("menu").get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //   })
  // });

  initRouterBurgerQueen();
}

window.addEventListener('load', inicializa)
