import firebase from 'firebase/compat/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const firebaseConfig = {
  apiKey: 'AIzaSyBr2Zs0pPCeRfaD30v7_YY5tdFlh2EHRAw',
  authDomain: 'oleh-olehku.firebaseapp.com',
  databaseURL: 'https://oleh-olehku-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'oleh-olehku',
  storageBucket: 'oleh-olehku.appspot.com',
  messagingSenderId: '861250081340',
  appId: '1:861250081340:web:dd6ebc4fe221c5c1fc2939',
  measurementId: 'G-SVNKRXHKD3',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());
const provider = new GoogleAuthProvider();
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown() {
      // The widget is rendered.
      // Hide the loader.
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '#/home',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>',
};

function signinUI() {
  ui.start('#firebaseui-auth-container', uiConfig);
}

const LogoutInitiator = {
  init({
    logout,
  }) {
    logout.addEventListener('click', this.signOutUser);
  },

  signOutUser() {
    console.log(firebase.auth().currentUser.displayName);
    console.log(getAuth().currentUser.displayName);
    // Sign out of Firebase.
    firebase.auth().signOut()
      .then(() => {
        console.log('Signed Out');
      });
  },
};

// const userPicElement = document.getElementById('user-pic');
const userNameElement = document.getElementById('user-name');
const signInButtonElement = document.getElementById('login');
const signOutButtonElement = document.getElementById('logout');
// const signInSnackbarElement = document.getElementById('must-signin-snackbar');

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
}

// Returns the signed-in user's display name.
function getUserName() {
  return getAuth().currentUser.displayName;
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) {
    // User is signed in!
    // Get the signed-in user's profile pic and name.
    // const profilePicUrl = getProfilePicUrl();
    const userName = getUserName();

    // Set the user's profile pic and name.
    // userPicElement.style.backgroundImage = `url(${addSizeToGoogleProfilePic(profilePicUrl)})`;
    userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    userNameElement.removeAttribute('hidden');
    // userPicElement.removeAttribute('hidden');
    signOutButtonElement.removeAttribute('hidden');

    // Hide sign-in button.
    signInButtonElement.setAttribute('hidden', 'true');
  } else {
    // User is signed out!
    // Hide user's profile and sign-out button.
    userNameElement.setAttribute('hidden', 'true');
    // userPicElement.setAttribute('hidden', 'true');
    signOutButtonElement.setAttribute('hidden', 'true');

    // Show sign-in button.
    signInButtonElement.removeAttribute('hidden');
  }
}

// Initiate firebase auth
function initFirebaseAuth() {
  // Listen to auth state changes.
  onAuthStateChanged(getAuth(), authStateObserver);
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!getAuth().currentUser;
}

initFirebaseAuth();

export { signinUI, LogoutInitiator };