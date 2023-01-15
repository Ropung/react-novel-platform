import resolveEXIFRotate from "@models/upload/resolveEXIFRotate";
import MainButton, {
  DangerButton,
  DarkButton,
} from "@styles/ui-components/button";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { RegisterProgress } from "../widgets/ManagementAdd";
import RegisterProgressBar from "./progress/RegisterProgressBar";
import SampleImage from "@assets/img/sample.jpeg";
export interface RegisterDetailProps {
  progress: RegisterProgress;
  setProgress: React.Dispatch<React.SetStateAction<RegisterProgress>>;
}

const RegisterDetail: FunctionComponent<RegisterDetailProps> = (props) => {
  const { progress, setProgress } = props;

  const [files, setFiles] = useState<FileList | null>(null);
  const [file, setFile] = useState<File | null>(null); // from files
  const [photoUrl, setPhotoUrl] = useState<string | ArrayBuffer | null>(null);
  const imageUploaderRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.debug(photoUrl);
  }, [photoUrl]);

  useEffect(() => {
    files &&
      resolveEXIFRotate(files)
        .then(setFile) //
        .catch(console.error);
  }, [files]);

  const clearImage = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (evt) =>
      imageUploaderRef.current &&
      setPhotoUrl((imageUploaderRef.current.value = "")),
    [imageUploaderRef.current]
  );
  const sendRequest = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (evt) => {
      if (!file) return;

      const formData = new FormData();
      formData.append("paramName", file); // custom param name: from your api server

      const option = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      /* (ex)
        axios.post(url, formData, option)
          .then(({ data })=>data)
          .then((data) => {
            // ...
          })
          .catch(console.error)
      */
    },
    [file]
  );

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
          <p className="w-[15%] font-bold">작품명</p>
          <input
            type="text"
            className="flex flex-1 border border-gray-400 rounded-lg p-4 text-sm"
            placeholder="40자 이하로 작성 가능합니다."
            maxLength={40}
          />
        </div>
        <div
          className={`w-full h-fit flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
        >
          <div className="w-[15%] flex flex-col justify-start items-start">
            <p className="w-full font-bold">작품소개</p>
            <span className="text-sm text-gray-400">{`(줄거리)`}</span>
          </div>

          <textarea
            className="flex flex-1 border border-gray-400 rounded-lg p-4 text-sm"
            cols={30}
            rows={10}
            placeholder="작품 줄거리를 입력하세요."
          ></textarea>
        </div>
        <div
          className={`w-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
        >
          <div className="w-[15%] flex flex-col gap-1">
            <p className="font-bold">표지이미지</p>
            <p className="text-sm text-gray-400">{`(200 x 305px)`}</p>
          </div>
          <section className="flex flex-1 gap-4 p-2 text-sm">
            {/* 이미지 */}
            <img
              src={(photoUrl as string) || SampleImage}
              className={`w-[150px] border rounded-md ${
                !!photoUrl ? "border-gray-300" : ""
              }`}
              // TODO 다국어 처리
              alt={
                !!photoUrl
                  ? "미리보기 이미지(Image Preview)"
                  : "선택된 사진이 없을 때는 눈 덮인 산을 멀리서 담은 샘플 이미지"
              }
            />

            <section className="w-full flex flex-col gap-2 overflow-hidden">
              <fieldset className="w-full flex flex-col whitespace-nowrap text-gray-400">
                <p className="font-bold text-dark">{`*주의사항`}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, non?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, non?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, non?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, non?
                </p>
              </fieldset>
              <fieldset className="w-full flex flex-row gap-2 justify-start">
                <input
                  className="hidden"
                  type="file"
                  accept="image/*"
                  ref={imageUploaderRef}
                  onChange={(evt) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(evt.target.files![0]);
                    setFiles(evt.target?.files);

                    // (Example of onload)
                    reader.onload = (evt) => {
                      const photoUrl = evt.target?.result;
                      photoUrl && setPhotoUrl(photoUrl);
                    };
                  }}
                />
                <DarkButton
                  className="w-fit"
                  onClick={(evt) => imageUploaderRef.current?.click()}
                >
                  사진 선택
                </DarkButton>

                <DangerButton className="w-fit" onClick={clearImage}>
                  초기화
                </DangerButton>
              </fieldset>
            </section>
          </section>
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
