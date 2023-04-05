import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);


  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();


// Google SignUp
  const continueWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

// Github SignUp
  const continueWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };


// Github SignUp
  const continueWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };



  // Email SignUp  
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   // Email Login  
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update User
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // Logout User
  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
    });

    return () => unsubscribe();
  });

  const authInfo = {
    user,
    continueWithGoogle,
    continueWithGithub,
    continueWithFacebook,
    createUser,
    loginUser,
    updateUser,
    logoutUser,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;