import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyA8qG9oCJtHs8p0Y0bCMxmxRUVj6NXYRIM",
    authDomain: "crown-clothing-a96c9.firebaseapp.com",
    projectId: "crown-clothing-a96c9",
    storageBucket: "crown-clothing-a96c9.appspot.com",
    messagingSenderId: "195880761147",
    appId: "1:195880761147:web:140db37e372f31e2c1a91e",
    measurementId: "G-8GFFDH0M7K"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
};
  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;