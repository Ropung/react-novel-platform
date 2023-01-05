import UserInfo from "@models/user/UserInfo";
import { db, auth } from "@utils/firebase";
import Path from "@utils/routes/Path";
import { useEffect, useState } from "react";
import {
  AiFillCopy,
  AiFillRightCircle,
  AiFillSafetyCertificate,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const { MODIFYINFO } = Path;
  const [userData, setUserData] = useState<UserInfo>({
    authorName: "불러오는중...",
    birth: "불러오는중...",
    email: "불러오는중...",
    fullname: "불러오는중...",
    uid: "불러오는중...",
  });

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("복사 성공!");
    } catch (error) {
      alert("복사 실패!");
    }
  };

  useEffect(() => {
    db.collection("users")
      .doc(auth.currentUser?.uid)
      .get()
      .then((doc) => {
        const docDataStringify = JSON.stringify(doc.data());
        const docData = JSON.parse(docDataStringify);

        console.log("docData:", docData);
        setUserData(docData);
      });
  }, [auth.currentUser]);

  return (
    <main className="w-full flex items-center justify-center">
      <div className="w-[80vw] h-full min-h-screen flex flex-col gap-4">
        <h1 className="font-bold text-xl">계정 정보</h1>
        <label
          className="flex flex-row items-center justify-between border border-gray-400 shadow-md rounded-md px-4 py-2"
          onClick={() => {
            navigate(MODIFYINFO, { replace: false });
          }}
        >
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">필명(닉네임)</p>
            <p>{userData.authorName}</p>
          </div>
          <AiFillRightCircle className="text-3xl" />
        </label>
        <label className="flex flex-row items-center justify-between border border-gray-400 shadow-md rounded-md px-4 py-2">
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">회원번호</p>
            <p>{userData.uid}</p>
          </div>
          <AiFillCopy
            className="text-3xl"
            onClick={() => {
              handleCopyClipBoard(userData.uid ?? "");
            }}
          />
        </label>
        <label className="flex flex-row items-center justify-between border border-gray-400 shadow-md rounded-md px-4 py-2">
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">이메일</p>
            <p>{userData.email}</p>
          </div>
          <AiFillSafetyCertificate className="text-3xl" />
        </label>
      </div>
    </main>
  );
};

export default MyPage;
