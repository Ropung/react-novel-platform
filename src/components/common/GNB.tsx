import Path from "@/utils/routes/Path";
import { auth, db } from "@utils/firebase";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "@utils/firebase/user";
import MainButton from "@styles/ui-components/button";
import UserInfo from "@models/user/UserInfo";
import { MdEmojiEvents } from "react-icons/md";

const GNB = () => {
  const {
    HOME,
    NOVEL,
    LOGIN,
    CARTOON,
    MY,
    EVENT,
    MANAGEMENTLIST,
    MANAGE_HOME,
    MANAGE_ADD,
  } = Path;
  const location = useLocation();
  const navigate = useNavigate();

  const menuList = [
    // Main navi List
    {
      content: "홈",
      linkTo: HOME,
      replace: false,
      position: "main",
    },
    {
      content: "웹소설",
      linkTo: NOVEL,
      replace: false,
      position: "main",
    },
    {
      content: "웹툰",
      linkTo: CARTOON,
      replace: false,
      position: "main",
    },
    // Work Navi List
    {
      content: "홈",
      linkTo: HOME,
      replace: false,
      position: "management",
    },
    {
      content: "작품관리",
      linkTo: MANAGE_HOME,
      replace: false,
      position: "management",
    },
    {
      content: "작품목록",
      linkTo: MANAGEMENTLIST,
      replace: false,
      position: "management",
    },

    // My Menu List
    {
      content: "이벤트",
      linkTo: EVENT,
      replace: false,
      position: "my",
    },
    {
      content: "작품관리",
      linkTo: MANAGE_HOME,
      replace: false,
      position: "my",
    },
    {
      content: "작품등록",
      linkTo: MANAGE_ADD,
      replace: false,
      position: "my",
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
            {menuList
              .filter((item) => {
                const PathNav =
                  location.pathname === MANAGE_HOME
                    ? item.position === "management"
                    : item.position === "main";
                return PathNav;
              })
              .map((menu) => (
                <li
                  key={menu.content}
                  onClick={() => navigate(menu.linkTo, { replace: true })}
                >
                  <li className="cursor-pointer">{menu.content}</li>
                </li>
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
                  {menuList
                    .filter((item) => item.position === "my")
                    .map((myMenu, index) => {
                      return (
                        <li
                          key={index}
                          className="w-full flex flex-row gap-2 justify-start items-center px-2 cursor-pointer"
                          onClick={() => {
                            navigate(myMenu.linkTo, {
                              replace: myMenu.replace,
                            });
                          }}
                        >
                          <MdEmojiEvents />
                          <span>{myMenu.content}</span>
                        </li>
                      );
                    })}
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
