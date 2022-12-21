import Path from "@/utils/routes/Path";
import React from "react";
import { Link } from "react-router-dom";

const GNB = () => {
  const { HOME, NOVEL, LOGIN, SIGNUP, WORKLIST } = Path;
  return (
    <nav className="fixed top-0 right-0 left-0 z-[100] w-screen flex flex-row h-32 bg-light text-dark select-none px-8 pt-2 pb-8 border-b shadow-md">
      <div className="w-full flex flex-col">
        <ul className="flex flex-row gap-2 justify-end font-bold">
          <li className="cursor-pointer">
            <Link to={SIGNUP}>회원가입</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={LOGIN}>로그인</Link>
          </li>
        </ul>
        <div className="flex justify-between items-end">
          <header className="w-full items-center text-5xl font-bold tracking-wider">
            Ropung
          </header>
          <ul className="flex flex-row items-end justify-center text-2xl whitespace-nowrap gap-10">
            <li>
              <Link to={HOME}>홈</Link>
            </li>
            <li>
              <Link to={NOVEL}>웹소설</Link>
            </li>
            <li>
              <Link to={NOVEL}>웹툰</Link>
            </li>
            <li>
              <Link to={WORKLIST}>작품목록</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default GNB;
