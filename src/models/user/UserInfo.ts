export default interface UserInfo {
  uid: string;
  username: string;
  email: string;
  authorName: string;
  birth: string;
  fullname: string;
}
export type UserInfoInput =
  | "uid"
  | "username"
  | "email"
  | "authorName"
  | "birth"
  | "fullname";
