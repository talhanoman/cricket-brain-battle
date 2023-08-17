import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics'; // If you want to use Analytics

const firebaseConfig = {
    apiKey: "AIzaSyCedv2_o2AykI4ke8D0Si5U_htCGS0rX0w",
    authDomain: "cricket-brain-battle-5ec29.firebaseapp.com",
    databaseURL: "https://cricket-brain-battle-5ec29-default-rtdb.firebaseio.com",
    projectId: "cricket-brain-battle-5ec29",
    storageBucket: "cricket-brain-battle-5ec29.appspot.com",
    messagingSenderId: "1024637368060",
    appId: "1:1024637368060:web:efb6f355ce7e6ef3c54979",
    measurementId: "G-YWPZ6B0VR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// If you want to use Analytics, initialize it as well
const analytics = getAnalytics(app);

export { app, db, analytics };