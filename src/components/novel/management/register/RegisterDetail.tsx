import MainButton from "@styles/ui-components/button";
import React, { FunctionComponent } from "react";
import { RegisterProgress } from "../widgets/ManagementAdd";
import RegisterProgressBar from "./progress/RegisterProgressBar";
export interface RegisterDetailProps {
  progress: RegisterProgress;
  setProgress: React.Dispatch<React.SetStateAction<RegisterProgress>>;
}

const RegisterDetail: FunctionComponent<RegisterDetailProps> = (props) => {
  const { progress, setProgress } = props;
  const progressStyle =
    "w-8 h-8 flex items-center justify-center border rounded-full p-4 bg-default";

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
                setProgress("기본설정");
              }}
            >
              {`< 이전`}
            </button>
            <button
              className="text-gray-400 border border-gray-400 px-2 rounded-md"
              onClick={() => {
                setProgress("회차내용");
              }}
            >
              {`다음 >`}
            </button>
          </div>
        </div>
        <p className="border-t-2" />
      </header>
      <section className="w-full flex flex-col gap-8">
        <div className="w-full flex flex-col gap-4 pt-4">
          {/* progressbar */}
          <RegisterProgressBar progress={progress} setProgress={setProgress} />
        </div>
      </section>

      <div className="w-full flex flex-col gap-4 text-lg">
        <div
          className={`w-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
        >
          <p className="w-[10%]">작품명</p>
          <input
            type="text"
            className="flex flex-1 border border-gray-400 rounded-lg p-2 text-sm"
            placeholder="40자 이하로 작성 가능합니다."
            maxLength={40}
          />
        </div>
        <div
          className={`w-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
        >
          <p className="w-[10%]">작품소개</p>
          <input
            type="text"
            className="flex flex-1 border border-gray-400 rounded-lg p-2 text-sm"
            placeholder="작품 줄거리를 입력하세요."
          />
        </div>
        <div
          className={`w-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
        >
          <p className="w-[10%]">표지이미지</p>
          <input
            type="text"
            className="flex flex-1 border border-gray-400 rounded-lg p-2 text-sm"
            placeholder="작품 줄거리를 입력하세요."
          />
        </div>

        <section className="w-full flex justify-end">
          <MainButton
            className="w-[20%] flex items-center justify-center"
            onClick={() => {
              setProgress("기본설정");
            }}
          >
            {`이전 >`}
          </MainButton>
          <MainButton
            className="w-[20%] flex items-center justify-center"
            onClick={() => {
              setProgress("회차내용");
            }}
          >
            {`다음 >`}
          </MainButton>
        </section>
      </div>
    </div>
  );
};

export default RegisterDetail;
