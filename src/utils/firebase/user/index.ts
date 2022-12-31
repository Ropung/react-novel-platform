import { db, auth } from "@utils/firebase";
import "firebase/firestore";
import "firebase/auth";

// 회원가입
export const signUp = (email: string, password: string) =>
  auth.createUserWithEmailAndPassword(email, password);
// 로그인
export const signIn = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password);
// 로그아웃
export const signOut = () => auth.signOut();

export const userDB = (
  email: string,
  uid: string,
  username: string,
  authorName: string,
  fullname: string,
  birth: string
) => {
  db.collection("users").doc(db.collection("users").id).set({
    email,
    uid,
    username,
    authorName,
    fullname,
    birth,
  });
};
