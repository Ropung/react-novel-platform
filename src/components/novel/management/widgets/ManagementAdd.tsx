import { useState } from "react";
import RegisterContents from "../register/RegisterContents";
import RegisterDefaultSet from "../register/RegisterDefaultSet";
import RegisterDetail from "../register/RegisterDetail";

export type RegisterProgress = "기본설정" | "상세설정" | "회차내용";

const ManagementAdd = () => {
  const [progress, setProgress] = useState<RegisterProgress>("기본설정");

  return (
    <main className="w-full flex items-center justify-center">
      <div className="w-[80vw] h-full min-h-screen flex flex-col gap-2">
        {progress === "기본설정" && (
          <RegisterDefaultSet progress={progress} setProgress={setProgress} />
        )}
        {progress === "상세설정" && (
          <RegisterDetail progress={progress} setProgress={setProgress} />
        )}
        {progress === "회차내용" && (
          <RegisterContents progress={progress} setProgress={setProgress} />
        )}
      </div>
    </main>
  );
};

export default ManagementAdd;
