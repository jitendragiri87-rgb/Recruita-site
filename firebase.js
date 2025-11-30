<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Your Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyCQi68RIeS4L5SwNQuAYFbK7KB3awrADV0",
  authDomain: "authentication-114b0.firebaseapp.com",
  projectId: "authentication-114b0",
  storageBucket: "authentication-114b0.firebasestorage.app",
  messagingSenderId: "332309567366",
  appId: "1:332309567366:web:0312c801fe2193e3debe07",
  measurementId: "G-F9PQ3DE71D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>
