// import * as firebase  from "firebase";
import "firebase/auth";
// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //Native3
  // apiKey: "AIzaSyATHqqHc-gpPpONXZyKNchj2_Arf0GDRZE",
  // authDomain: "native3-32598.firebaseapp.com",
  // projectId: "native3-32598",
  // storageBucket: "native3-32598.appspot.com",
  // messagingSenderId: "731754440015",
  // appId: "1:731754440015:web:c485cb6573fe555161513a"
  //   measurementId: "G-1EMZNXNNCB"
  apiKey: "AIzaSyCHWQKPpBRNHd3CK9d24-AQO6MpdrZ9keM",
  authDomain: "native4-a2e33.firebaseapp.com",
  projectId: "native4-a2e33",
  storageBucket: "native4-a2e33.appspot.com",
  messagingSenderId: "925610788780",
  appId: "1:925610788780:web:42271113e2366b9f2a9c09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
