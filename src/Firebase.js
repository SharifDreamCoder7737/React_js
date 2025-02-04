import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, getToken} from 'firebase/messaging';


const firebaseConfig = {
    apiKey: "AIzaSyD3gF9pMJoft6Ct6NACVutch-5_FWe72BQ",
    authDomain: "testreact-d2584.firebaseapp.com",
    projectId: "testreact-d2584",
    storageBucket: "testreact-d2584.firebasestorage.app",
    messagingSenderId: "1018173049483",
    appId: "1:1018173049483:web:9c7073cdd2966b05fa628e",
    measurementId: "G-M1V7HBVLH0"
  };

  initializeApp(firebaseConfig);

  const messaging = getMessaging();

  export const requestForToken = () => {
    //   console.log("sfdgggrtgtrgtrg");
      return getToken(messaging, {vapidKey: "BD3wRRwQxBdJ-YsDNR--GHJ1Nf5n0RAdDLB287MNZEeztnqaxKqPgqHuYBFTFDmitoOTPa_tmFKTN7ycpZgD5vc"})
      .then((currentToken) =>{
          if(currentToken) {
              console.log("Token client", currentToken);
          }else {
              console.log('No registration token available');
          }
      })
      .catch(err => {
          console.log('Error while register token',err);
      })
  }
  export const onMessageListener = () => { 
    return new Promise((resolve) => {  // "Promise" का 'P' capital होना चाहिएa
        onMessage(messaging, (payload) => {
            console.log("OnMessage payload", payload);
            resolve(payload);
        });
    });
};

