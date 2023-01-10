import MainButton from "@styles/ui-components/button";
import Path from "@utils/routes/Path";
import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterProgress } from "../widgets/ManagementAdd";
import RegisterProgressBar from "./progress/RegisterProgressBar";

export interface RegisterContentsProps {
  progress: RegisterProgress;
  setProgress: React.Dispatch<React.SetStateAction<RegisterProgress>>;
}

const RegisterContents: FunctionComponent<RegisterContentsProps> = (props) => {
  const { progress, setProgress } = props;
  const navigate = useNavigate();
  const { MANAGE_HOME } = Path;

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <header className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-row justify-between items-end">
          <h1 className="flex flex-1 gap-2 items-end font-bold text-3xl">
            <span>작품등록</span>
          </h1>
          <div className="w-[30%] flex flex-row justify-end items-center gap-2">
            <button
              className="text-gray-400 border border-gray-400 px-2 rounded-md"
              onClick={() => {
                setProgress("상세설정");
              }}
            >
              {`< 이전`}
            </button>
            <button
              className="text-gray-400 border border-gray-400 px-2 rounded-md"
              onClick={() => {
                navigate(MANAGE_HOME, { replace: false });
              }}
            >
              {`완료 >`}
            </button>
          </div>
        </div>
        <p className="border-t-2" />
      </header>
      <section className="w-full flex flex-col gap-8">
        {/* progressbar */}
        <RegisterProgressBar progress={progress} setProgress={setProgress} />
      </section>

      <section className="w-full flex flex-col gap-4 text-lg">
        <div
          className={`w-full flex flex-row justify-between items-center border border-gray-400 rounded-md shadow-md p-4 checked-bg:bg-main`}
        >
          <p className="flex flex-1">작품성향</p>
          <select className="w-[20%] border border-gray-400 rounded-lg p-2 text-sm">
            <option value="defalut">선택안함</option>
            <option value="man">남성향</option>
            <option value="woman">여성향</option>
          </select>
        </div>
        <div
          className={`w-full flex flex-row justify-between items-center border border-gray-400 rounded-md shadow-md p-4 ${``}`}
        >
          <p className="flex flex-1">카테고리</p>
          <select className="w-[20%] border border-gray-400 rounded-lg p-2 text-sm">
            <option value="defalut">판타지</option>
            <option value="man">무협</option>
            <option value="woman">라이트노벨</option>
            <option value="woman">게임</option>
          </select>
        </div>
        <div className="w-full flex justify-end">
          <MainButton
            className="w-[20%] flex items-center justify-center"
            onClick={() => {
              setProgress("상세설정");
            }}
          >
            {`이전 >`}
          </MainButton>
          <MainButton
            className="w-[20%] flex items-center justify-center"
            onClick={() => {
              navigate(MANAGE_HOME);
            }}
          >
            {`완료 >`}
          </MainButton>
        </div>
      </section>
    </div>
  );
};

export default RegisterContents;
