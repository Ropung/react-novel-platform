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
import useAutosizeTextArea from "@utils/common/textresize";
export interface RegisterDetailProps {
  progress: RegisterProgress;
  setProgress: React.Dispatch<React.SetStateAction<RegisterProgress>>;
}

const RegisterDetail: FunctionComponent<RegisterDetailProps> = (props) => {
  const { progress, setProgress } = props;

  // img
  const [files, setFiles] = useState<FileList | null>(null);
  const [file, setFile] = useState<File | null>(null); // from files
  const [photoUrl, setPhotoUrl] = useState<string | ArrayBuffer | null>(null);
  const imageUploaderRef = useRef<HTMLInputElement | null>(null);

  // text resize
  const introductionNovelRef = useRef<HTMLTextAreaElement | null>(null);
  const [introductionNovelValue, setIntroductionNovelValue] =
    useState<string>("");
  useAutosizeTextArea(introductionNovelRef.current, introductionNovelValue);

  const introductHandleChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const val = evt.target?.value;

    setIntroductionNovelValue(val);
  };

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
            <span>????????????</span>
          </h1>
          <div className="w-[30%] flex flex-row justify-end items-center gap-2">
            <button
              className="text-gray-400 border border-gray-400 px-2 rounded-md"
              onClick={() => {
                setProgress("????????????");
              }}
            >
              {`< ??????`}
            </button>
            <button
              className="text-gray-400 border border-gray-400 px-2 rounded-md"
              onClick={() => {
                setProgress("????????????");
              }}
            >
              {`?????? >`}
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
          <p className="w-[15%] font-bold">?????????</p>
          <input
            type="text"
            className="flex flex-1 border border-gray-400 rounded-lg p-4 text-lg outline-none resize-none"
            placeholder="40??? ????????? ?????? ???????????????."
            maxLength={40}
          />
        </div>
        <div
          className={`w-full h-fit flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
        >
          <div className="w-[15%] flex flex-col justify-start items-start">
            <p className="w-full font-bold">????????????</p>
            <span className="text-sm text-gray-400">{`(?????????)`}</span>
          </div>
          {/* ???????????? textarea */}
          <textarea
            ref={introductionNovelRef}
            className="w-full min-h-[15vh] flex flex-1 border border-gray-400 rounded-lg p-4 text-sm outline-none resize-none placeholder:text-base"
            rows={1}
            placeholder="?????? ???????????? ???????????????."
            value={introductionNovelValue}
            onChange={introductHandleChange}
          ></textarea>
        </div>
        <div
          className={`w-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
        >
          <div className="w-[15%] flex flex-col gap-1">
            <p className="font-bold">???????????????</p>
            <p className="text-sm text-gray-400">{`(200 x 305px)`}</p>
          </div>
          <section className="flex flex-1 gap-4 p-2 text-sm">
            {/* ????????? */}
            <img
              src={(photoUrl as string) || SampleImage}
              className={`w-[150px] border rounded-md ${
                !!photoUrl ? "border-gray-300" : ""
              }`}
              // TODO ????????? ??????
              alt={
                !!photoUrl
                  ? "???????????? ?????????(Image Preview)"
                  : "????????? ????????? ?????? ?????? ??? ?????? ?????? ????????? ?????? ?????? ?????????"
              }
            />

            <section className="w-full flex flex-col gap-2 overflow-hidden">
              <fieldset className="w-full flex flex-col whitespace-nowrap text-gray-400">
                <p className="font-bold text-dark">{`*????????????`}</p>
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
                  ?????? ??????
                </DarkButton>

                <DangerButton className="w-fit" onClick={clearImage}>
                  ?????????
                </DangerButton>
              </fieldset>
            </section>
          </section>
        </div>

        <section className="w-full flex justify-end">
          <MainButton
            className="w-[20%] flex items-center justify-center"
            onClick={() => {
              setProgress("????????????");
            }}
          >
            {`?????? >`}
          </MainButton>
          <MainButton
            className="w-[20%] flex items-center justify-center"
            onClick={() => {
              setProgress("????????????");
            }}
          >
            {`?????? >`}
          </MainButton>
        </section>
      </div>
    </div>
  );
};

export default RegisterDetail;
