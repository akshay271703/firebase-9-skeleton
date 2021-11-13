import { auth } from "./config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updatePassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Create a new user.
const createUser = async (email, password) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  if (!user) {
    // throw error
    return [false, null];
  }
  return [true, user];
};

// Sign in a user.
const signIn = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  if (!user) {
    // throw error
    return [false, null];
  }
  return [true, user];
};

// Get currently logged in user.
const getCurrentUser = async () => {
  const user = await onAuthStateChanged(auth);
  if (!user) {
    return [false, null];
  }
  return [true, user];
};

// Signs out currently logged in user.
const signOutUser = () => {
  try {
    await signOut(auth);
    return [true, "User logged out"];
  } catch (error) {
    return [false, error];
  }
};

// Update User's Password
const updatePasword = async (password) => {
  const user = auth.currentUser; // Or the above mentioned way
  if (!user) {
    return [false, "No logged in user"];
  }
  try {
    await updatePassword(user, password);
    return [true, "Passwored changed successfully"];
  } catch (error) {
    return [false, null];
  }
};

// Send password reset email
const sendPaswordResetEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return [true, "Email sent"];
  } catch (error) {
    return [false, error];
  }
};

export {
  createUser,
  signIn,
  getCurrentUser,
  updatePasword,
  sendPaswordResetEmail,
  signOutUser,
};
