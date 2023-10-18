import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const all = import.meta.env;
const firebaseConfig = {
  apiKey: all.AUTH_APIKEY,
  authDomain: all.AUTH_AUTHDOMAIN,
  projectId: all.AUTH_PROJECTID,
  storageBucket: all.AUTH_STORAGEBUCKET,
  messagingSenderId: all.AUTH_MESSAGINGSENDERID,
  appId: all.AUTH_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
