/* Firebase configuration and service helpers. */
(function () {
  "use strict";

  var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCPq5LBP-jSnmi4KJbf0F7ULPjax-EDwLM",
    authDomain: "bonpala-38853.firebaseapp.com",
    projectId: "bonpala-38853",
    storageBucket: "bonpala-38853.firebasestorage.app",
    messagingSenderId: "119545118332",
    appId: "1:119545118332:web:9d61086c245a76de7553f9"
  };

  function hasPlaceholder(value) {
    return typeof value !== "string" || value.indexOf("REPLACE_WITH_") === 0;
  }

  function isConfigured() {
    return !Object.keys(FIREBASE_CONFIG).some(function (key) {
      return hasPlaceholder(FIREBASE_CONFIG[key]);
    });
  }

  var auth = null;
  var db = null;
  var initError = null;

  if (typeof window !== "undefined" && window.firebase && isConfigured()) {
    try {
      if (!window.firebase.apps.length) {
        window.firebase.initializeApp(FIREBASE_CONFIG);
      }
      auth = window.firebase.auth();
      db = window.firebase.firestore();
    } catch (error) {
      initError = error;
    }
  }

  function authUnavailableError() {
    if (initError) return initError;
    return new Error("Firebase is not configured.");
  }

  var FirebaseService = {
    auth: auth,
    db: db,
    isConfigured: isConfigured,
    isReady: function () {
      return Boolean(auth && db && !initError);
    },
    initError: initError,
    signIn: function (email, password) {
      if (!auth) return Promise.reject(authUnavailableError());
      return auth.signInWithEmailAndPassword(email, password);
    },
    signOutUser: function () {
      if (!auth) return Promise.reject(authUnavailableError());
      return auth.signOut();
    },
    onAuthChange: function (callback) {
      if (!auth) {
        callback(null);
        return function () {};
      }
      return auth.onAuthStateChanged(callback);
    },
    getUserDocRef: function (uid) {
      if (!db) throw authUnavailableError();
      return db.collection("users").doc(uid);
    },
    serverTimestamp: function () {
      if (typeof window === "undefined" || !window.firebase || !window.firebase.firestore) {
        return new Date().toISOString();
      }
      return window.firebase.firestore.FieldValue.serverTimestamp();
    }
  };

  window.FirebaseService = FirebaseService;
})();
