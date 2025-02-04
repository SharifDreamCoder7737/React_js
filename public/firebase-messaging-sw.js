importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyD3gF9pMJoft6Ct6NACVutch-5_FWe72BQ",
  authDomain: "testreact-d2584.firebaseapp.com",
  projectId: "testreact-d2584",
  storageBucket: "testreact-d2584.appspot.com",
  messagingSenderId: "1018173049483",
  appId: "1:1018173049483:web:9c7073cdd2966b05fa628e",
  measurementId: "G-M1V7HBVLH0",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/logo192.png",
  });
});
