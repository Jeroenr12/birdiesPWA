import {initializeApp} from "firebase/app";
import {initializeFirestore, persistentLocalCache, persistentMultipleTabManager} from 'firebase/firestore';

const firebaseConfig = {
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig, );

export const firestoreDB= initializeFirestore(firebaseApp,{localCache: persistentLocalCache(/*settings*/{tabManager: persistentMultipleTabManager()})});
console.log("initialized firebase connection");

export const birdConverter = {
    toFirestore: function (dataInApp){
        return{
            name: dataInApp.name,
            color: dataInApp.color,
            size: dataInApp.size,
        }
    },
    fromFirestore: function (snapshot, options){
        const data = snapshot.data(options);
        return{...data, id: snapshot.id, ref: snapshot.ref}
    }
};