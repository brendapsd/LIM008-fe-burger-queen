export const dataMenu = (callback) =>
    firebase.firestore().collection('menu')
    .onSnapshot((querySnapshot) => {
        const arr = []; 
        querySnapshot.forEach((doc) => {
          arr.push({id: doc.id, ...doc.data()})
        });
        callback(arr)
    });

