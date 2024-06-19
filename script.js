import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyByN6-ddpGdqUpauBkdygSDLBG5hanaU-o",
  authDomain: "club-paramoteur-auth.firebaseapp.com",
  projectId: "club-paramoteur-auth",
  storageBucket: "club-paramoteur-auth.appspot.com",
  messagingSenderId: "283398992068",
  appId: "1:283398992068:web:7683da9f26a8af18561991"
};

initializeApp(firebaseConfig);

const auth = getAuth();

const loginForm = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("#login-btn");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Logged in as", user);
      // Redirect to dashboard
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error:", errorCode, errorMessage);
    });
});
