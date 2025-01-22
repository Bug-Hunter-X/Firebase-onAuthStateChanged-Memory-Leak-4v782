import { onAuthStateChanged, auth } from './firebase'; //Import firebase config

const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    const uid = user.uid;
    console.log('User is signed in:', uid);
    // ...
  } else {
    // User is signed out
    // ...
    console.log('User is signed out');
  }
});

// Cleanup function to unsubscribe when component unmounts or similar lifecycle event
const cleanup = () => {
  unsubscribe();
};

export default cleanup; //Export cleanup function for use in a component's cleanup/effect