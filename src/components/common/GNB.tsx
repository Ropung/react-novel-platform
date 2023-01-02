import Path from "@/utils/routes/Path";
import { auth, db } from "@utils/firebase";
import { useEffect, useLayoutEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "@utils/firebase/user";
import MainButton from "@styles/ui-components/button";
import UserInfo from "@models/user/UserInfo";
import { TfiWrite } from "react-icons/tfi";
import { MdEmojiEvents } from "react-icons/md";
import { IoFolderOpenOutline } from "react-icons/io5";

const GNB = () => {
  const { HOME, NOVEL, LOGIN, SIGNUP, WORKLIST, CARTOON, MY, LOGOUT } = Path;

  const navigate = useNavigate();
  const topNavMenuList = [
    {
      content: "회원가입",
      linkTo: SIGNUP,
      replace: true,
    },
    {
      content: "로그인",
      linkTo: LOGIN,
      replace: true,
    },
  ];

  const authTopNavMenuList = [
    {
      content: "마이페이지",
      linkTo: MY,
      replace: true,
    },
    {
      content: "로그아웃",
      linkTo: LOGOUT,
      replace: true,
    },
  ];

  const navMenuList = [
    {
      content: "홈",
      linkTo: HOME,
      replace: false,
    },
    {
      content: "웹소설",
      linkTo: NOVEL,
      replace: false,
    },
    {
      content: "웹툰",
      linkTo: CARTOON,
      replace: false,
    },
    {
      content: "작품목록",
      linkTo: WORKLIST,
      replace: false,
    },
  ];

  const [isMyModal, setMyModal] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserInfo>({
    authorName: "",
    birth: "",
    email: "",
    fullname: "",
    uid: "",
  });

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
    <nav className="w-full fixed top-0 right-0 left-0 z-[100] flex flex-row h-36 bg-light text-dark select-none px-8 border-b shadow-md">
      <div className="w-full flex flex-row justify-between items-center gap-6 px-8 py-4">
        <div
          className="flex justify-start items-end gap-12"
          onClick={() => {
            setMyModal(false);
          }}
        >
          <Link
            to={HOME}
            className="items-center text-5xl font-bold tracking-wider"
          >
            Ropung
          </Link>
          {/* 미들 네비 메뉴 */}
          <ul className="flex flex-row items-end justify-center text-2xl whitespace-nowrap gap-6">
            {navMenuList.map((menu) => (
              <Link to={menu.linkTo} key={menu.content} replace={menu.replace}>
                <li className="cursor-pointer">{menu.content}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-row gap-2 justify-end items-center font-bold relative">
          {!auth.currentUser && (
            <AiOutlineUser
              className="text-5xl"
              onClick={() => {
                navigate(LOGIN, { replace: false });
              }}
            />
          )}
          {auth.currentUser && (
            <div
              className="flex flex-row gap-2 items-center"
              onClick={() => {
                setMyModal(!isMyModal);
                console.log("isMyModal:", isMyModal);
              }}
            >
              <FaUserCheck className="text-5xl" />
              <IoIosArrowDown
                className={`text-3xl duration-500 ease-in-out ${
                  isMyModal ? `` : `rotate-180`
                } `}
              />
            </div>
          )}
          {auth.currentUser && isMyModal && (
            <section
              className={`absolute top-[120%] right-0 w-[30vw] bg-white border border-gray-200 rounded-md shadow-md p-4`}
            >
              <div className="w-full h-fit flex flex-col gap-2">
                <div
                  className="w-full flex justify-center gap-1 font-bold border border-main bg-white px-4 py-2 rounded-md"
                  onClick={() => {
                    navigate(MY, { replace: true });
                    setMyModal(false);
                  }}
                >
                  <span>{userData.fullname}</span>
                  <span>님</span>
                </div>
                <p className="w-full border-b border-gray-400"></p>
                <ul className="w-full flex flex-col py-2 gap-2 items-center justify-center">
                  <li className="w-full flex flex-row gap-2 justify-start items-center px-2 cursor-pointer">
                    <MdEmojiEvents />
                    <span>이벤트</span>
                  </li>
                  <li className="w-full flex flex-row gap-2 justify-start items-center px-2 cursor-pointer">
                    <IoFolderOpenOutline />
                    <span>작품등록</span>
                  </li>
                  <li className="w-full flex flex-row gap-2 justify-start items-center px-2 cursor-pointer">
                    <TfiWrite />
                    <span>작품관리</span>
                  </li>
                </ul>
                <span className="border-t border-gray-400" />
                <MainButton
                  className="w-full"
                  onClick={() => {
                    if (!auth.currentUser) {
                      return;
                    }
                    signOut()
                      .then((result) => console.log("result:", result))
                      .catch(console.error);
                    navigate(HOME, { replace: true });
                  }}
                >
                  로그아웃
                </MainButton>
              </div>
            </section>
          )}
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default GNB;
