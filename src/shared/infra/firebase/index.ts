import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC49QJxpjdlE_ktHB9ZdfispywXM-KPYHY",
    authDomain: "node-project-eb43e.firebaseapp.com",
    projectId: "node-project-eb43e",
    storageBucket: "node-project-eb43e.appspot.com",
    messagingSenderId: "656133086631",
    appId: "1:656133086631:web:05d768c341e4e719e52a82",
    measurementId: "G-NCHZTJEZFK"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
