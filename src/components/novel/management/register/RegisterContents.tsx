import MainButton from "@styles/ui-components/button";
import useAutosizeTextArea from "@utils/common/textresize";
import Path from "@utils/routes/Path";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
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

  // text resize
  const contentsSessionRef = useRef<HTMLTextAreaElement | null>(null);
  const reviewWorkRef = useRef<HTMLTextAreaElement | null>(null);

  const [contentsSessionValue, setContentsSessionValue] = useState<string>("");
  const [reviewWorkValue, setreViewWorkValue] = useState<string>("");

  useAutosizeTextArea(contentsSessionRef.current, contentsSessionValue);
  useAutosizeTextArea(reviewWorkRef.current, reviewWorkValue);

  const contentsSessionHandleChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const val = evt.target?.value;
    setContentsSessionValue(val);
  };
  const reviewWorkHandleChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const val = evt.target?.value;
    setreViewWorkValue(val);
  };

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
      <div className="w-full flex flex-col gap-4">
        {/* 회차 내용 section */}
        <section className={`w-full flex flex-col items-center`}>
          <h3 className="w-full flex flex-col items-start justify-center gap-1">
            <p className="py-4 text-2xl">회차내용</p>
            <fieldset className="w-full flex flex-col gap-4 border border-gray-400 rounded-md p-4">
              <input
                className="w-full h-8 p-2 outline-none text-lg"
                type={"text"}
                placeholder="소제목을 입력하세요. (최대 50글자)"
                maxLength={50}
              ></input>
              <p className="border-b border-2" />
              {/* 회차내용 */}
              <textarea
                ref={contentsSessionRef}
                className="w-full min-h-[20vh] p-2 outline-none resize-none placeholder:text-base"
                rows={1}
                placeholder={`작가님의 아이디어를 보여주세요.\n시작이 반이다!\n\n작가님의 상상력과 기발하고\n재치있는 아이디어를 로풍이 응원합니다.\n\n글을 적으시면 스크롤없이 자동으로 줄바꿈이 적용되어 있습니다!`}
                value={contentsSessionValue}
                onChange={contentsSessionHandleChange}
              ></textarea>
            </fieldset>
          </h3>
          <div className="w-full flex flex-col items-start justify-center gap-1">
            <h3 className="py-4 text-2xl">작품후기</h3>
            <fieldset className="w-full flex flex-col gap-4 border border-gray-400 rounded-md p-4 outline-none resize-none">
              {/* 작품후기 textarea*/}
              <textarea
                ref={reviewWorkRef}
                className="w-full h-fit p-2 outline-none resize-none placeholder:text-lg"
                rows={1}
                placeholder="작품후기를 입력하세요."
                value={reviewWorkValue}
                onChange={reviewWorkHandleChange}
              ></textarea>
            </fieldset>
          </div>
        </section>
        {/* 버튼  section */}
        <section className="w-full flex justify-end">
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
        </section>
      </div>
    </div>
  );
};

export default RegisterContents;
