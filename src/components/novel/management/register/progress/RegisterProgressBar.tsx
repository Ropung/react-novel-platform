import Path from "@utils/routes/Path";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterProgress } from "../../widgets/ManagementAdd";

export interface RegisterProgressProps {
  progress: RegisterProgress;
  setProgress: React.Dispatch<React.SetStateAction<RegisterProgress>>;
}

const RegisterProgressBar: FunctionComponent<RegisterProgressProps> = (
  props
) => {
  const { progress, setProgress } = props;
  const navigate = useNavigate();
  const { MANAGE_HOME } = Path;
  const progressStyle =
    "w-8 h-8 flex items-center justify-center border rounded-full p-4 bg-default";

  return (
    <div className="w-full flex flex-col gap-4 pt-4">
      <ul className="w-full flex justify-start items-center gap-6 text-xl text-gray-400 ">
        <li
          className={`flex flex-row gap-1 items-center justify-center cursor-pointer ${
            progress === "기본설정" && "text-dark"
          }`}
          onClick={() => {
            setProgress("기본설정");
          }}
        >
          <p className={`${progressStyle}`}>1</p>
          <span>기본설정</span>
        </li>
        <p>{`>`}</p>
        <li
          className={`flex flex-row gap-1 items-center justify-center cursor-pointer ${
            progress === "상세설정" && "text-dark"
          }`}
          onClick={() => {
            setProgress("상세설정");
          }}
        >
          <p className={`${progressStyle}`}>2</p>
          <span>상세설정</span>
        </li>
        <p>{`>`}</p>
        <li
          className={`flex flex-row gap-1 items-center justify-center cursor-pointer ${
            progress === "회차내용" && "text-dark"
          }`}
          onClick={() => {
            setProgress("회차내용");
          }}
        >
          <p className={`${progressStyle}`}>3</p>
          <span>회차내용</span>
        </li>
      </ul>
    </div>
  );
};

export default RegisterProgressBar;
