import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAxVDFFWQhIZ78aUgSuG-em6IFBWBZQBgQ",
    authDomain: "react-app-t.firebaseapp.com",
    databaseURL: "https://react-app-t.firebaseio.com",
    projectId: "react-app-t",
    storageBucket: "",
    messagingSenderId: "639191419909",
    appId: "1:639191419909:web:6d68c357bd98417d"
};
firebase.initializeApp(config);
export default firebase;