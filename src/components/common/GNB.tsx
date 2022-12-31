import Path from "@/utils/routes/Path";
import naviMenuProps from "@models/navmenu/NavMenu";
import { auth } from "@utils/firebase";
import { signOut } from "@utils/firebase/user";
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

const GNB = () => {
  const { HOME, NOVEL, LOGIN, SIGNUP, WORKLIST, CARTOON, My, LOGOUT } = Path;

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
      linkTo: My,
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
      content: "웹소설",
      linkTo: HOME,
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

  // const [isAuthDisabled, setAuthDisabled] = useState<boolean>(false);

  // useLayoutEffect(() => {
  //   if (isAuthDisabled) {
  //     return;
  //   }
  // }, [auth.currentUser, authTopNavMenuList, topNavMenuList]);

  return (
    <nav className="w-screen fixed top-0 right-0 left-0 z-[100] flex flex-row h-36 bg-light text-dark select-none px-8 border-b shadow-md">
      <div className="w-full flex flex-col gap-6 px-8 py-4">
        {/* 탑 네비 메뉴 */}
        <ul className="flex flex-row gap-2 justify-end font-bold">
          {(auth.currentUser ? authTopNavMenuList : topNavMenuList).map(
            (menu) => (
              <Link to={menu.linkTo} key={menu.content} replace={menu.replace}>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    menu.content == "로그아웃" &&
                      auth.currentUser &&
                      signOut()
                        .then((result) => console.log("result:", result))
                        .catch(console.error);
                  }}
                >
                  {menu.content}
                </li>
              </Link>
            )
          )}
        </ul>
        <div className="flex justify-between items-end">
          <Link
            to={HOME}
            className="items-center text-5xl font-bold tracking-wider"
          >
            Ropung
          </Link>
          {/* 미들 네비 메뉴 */}
          <ul className="flex flex-row items-end justify-center text-2xl whitespace-nowrap gap-10">
            {navMenuList.map((menu) => (
              <Link to={menu.linkTo} key={menu.content} replace={menu.replace}>
                <li className="cursor-pointer">{menu.content}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default GNB;
