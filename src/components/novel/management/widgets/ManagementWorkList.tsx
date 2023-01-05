import MainButton from "@styles/ui-components/button";
import Path from "@utils/routes/Path";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IsNovel from "./state/IsNovel";
import NoNovel from "./state/NoNovel";

const ManagementWorkList = () => {
  const navigate = useNavigate();
  const { HOME } = Path;

  type novelStateProps = "연재" | "완결";

  const novelState = [
    {
      content: "연재",
    },
    {
      content: "완결",
    },
  ];

  const [text, setTest] = useState<boolean>(false);

  return (
    <main className="w-full flex items-center justify-center">
      <div className="w-[80vw] h-full flex flex-col gap-4">
        <header className="w-full flex flex-col gap-2">
          <div className="w-full flex flex-row justify-between items-end">
            <div className="flex justify-start items-end gap-6">
              <h1 className="flex flex-1 gap-2 items-end font-bold text-2xl">
                <span>작품목록</span>
                <span className="text-xl text-gray-600">({`-1`})</span>
              </h1>
              <ul className="flex items-end gap-2 text-lg">
                {novelState.map((state, index) => {
                  return (
                    <li className="cursor-pointer" key={index}>
                      <p>{state.content}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <MainButton
              className="w-fit"
              onClick={() => {
                navigate(HOME, { replace: false });
              }}
            >
              새작품 등록하기
            </MainButton>
          </div>
          <p className="border-t-2" />
        </header>

        {/* 작품 리스트 영역  [ 없을때 / 있을때 ]*/}
        {text ? <NoNovel /> : <IsNovel />}
      </div>
    </main>
  );
};

export default ManagementWorkList;
