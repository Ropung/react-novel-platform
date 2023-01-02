import UserInfo from "@models/user/UserInfo";
import MainButton, { DefaultButton } from "@styles/ui-components/button";
import { auth, db } from "@utils/firebase";
import Path from "@utils/routes/Path";
import { useEffect, useRef, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const ModifyUserInfo = () => {
  const { MY } = Path;
  const navigate = useNavigate();
  const inputNameRef = useRef<HTMLInputElement | null>(null);

  const [userData, setUserData] = useState<UserInfo>({
    authorName: "",
    birth: "",
    email: "",
    fullname: "",
    uid: "",
  });
  const [initText, setInitText] = useState<string>(
    userData.authorName ?? "정보없음"
  );

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

  useEffect(() => {
    const inputText = inputNameRef.current?.value;
    setInitText(inputText ?? "");
  }, [inputNameRef.current?.value]);

  return (
    <main className="w-full flex items-center justify-center pt-12">
      <div className="w-[80vw] flex flex-col gap-4">
        <h1 className="font-bold text-xl">계정정보 수정</h1>
        <section className="flex flex-row items-center justify-between border border-gray-400 shadow-md rounded-md px-4 py-2">
          <div className="w-full flex flex-col gap-2 px-2 py-2">
            <div className="flex justify-between items-center">
              <p>필명을 입력해주세요.</p>
              <p className="text-gray-400">
                (
                <span>
                  {initText.length}/{16}
                </span>
                )
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <input
                className="flex-1 border border-gray-400"
                ref={inputNameRef}
                type="text"
                maxLength={16}
                value={initText}
                onChange={(e) => {
                  setInitText(e.target.value);
                }}
                placeholder={userData.authorName ?? ""}
              />
              <ImCancelCircle
                className="w-fit text-3xl"
                onClick={() => {
                  setInitText("");
                }}
              />
            </div>
          </div>
        </section>
        <div className="w-full flex flex-row gap-2 items-center justify-center">
          <DefaultButton
            className="flex-1 font-bold !py-2"
            onClick={() => {
              navigate(MY, { replace: true });
            }}
          >
            취소
          </DefaultButton>
          <MainButton
            className="w-[40%] font-bold !py-2"
            disabled={initText.length <= 0 || initText === userData.authorName}
            onClick={() => {
              db.collection("users")
                .doc(auth.currentUser?.uid)
                .update({ authorName: initText });

              navigate(MY, { replace: true });
            }}
          >
            변경하기
          </MainButton>
        </div>
      </div>
    </main>
  );
};

export default ModifyUserInfo;
