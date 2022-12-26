import { db, auth } from "@utils/firebase";
import "firebase/firestore";
import "firebase/auth";

export const signUp = (username: string, password: string) =>
  auth.createUserWithEmailAndPassword(username, password);
