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

//유저데이터 저장
export const userDB = (
  email: string,
  uid: string,
  authorName: string,
  fullname: string,
  birth: string
) => {
  db.collection("users").doc(auth.currentUser?.uid).set({
    email,
    uid,
    authorName,
    fullname,
    birth,
  });
};
