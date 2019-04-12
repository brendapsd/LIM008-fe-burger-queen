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
  firebase.initializeApp(config);
  initRouterBurgerQueen(); 
}

window.addEventListener('load', inicializa)

// var docRef = firebase.firestore().collection("menu").doc("1rASskenrjareq1EQh2X");

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });


firebase.firestore().collection("menu").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
  });
});
