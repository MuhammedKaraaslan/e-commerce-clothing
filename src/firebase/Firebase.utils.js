import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyAv0JPbinSfOWEkuxI7iBkqCmQra2DcKBY",
    authDomain: "e-commerce-clothing-db-5aa38.firebaseapp.com",
    projectId: "e-commerce-clothing-db-5aa38",
    storageBucket: "e-commerce-clothing-db-5aa38.appspot.com",
    messagingSenderId: "431257938112",
    appId: "1:431257938112:web:675328293fe7f747542525",
    measurementId: "G-FK50DYZ6ZY"
};

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
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;