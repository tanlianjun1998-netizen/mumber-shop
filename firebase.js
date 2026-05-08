import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFZNYhXDn7SnwTZO5qvo2Z20bltJdkL6c",
  authDomain: "robux-4dedd.firebaseapp.com",
  databaseURL: "https://robux-4dedd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "robux-4dedd",
  storageBucket: "robux-4dedd.firebasestorage.app",
  messagingSenderId: "452990266649",
  appId: "1:452990266649:web:a44b1c4a7023727809a988"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// Firestore 数据库
export const db = getFirestore(app);
