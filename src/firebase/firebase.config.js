import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA1jg2mAsCfqRmAE4qlzYSegR-qappsJAs",
  authDomain: "online-group-study-asgn11.firebaseapp.com",
  projectId: "online-group-study-asgn11",
  storageBucket: "online-group-study-asgn11.appspot.com",
  messagingSenderId: "830523701108",
  appId: "1:830523701108:web:91bb464812714ae8a51e21",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
