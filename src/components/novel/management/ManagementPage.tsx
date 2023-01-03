import { useState } from "react";
import ManagementWorkList from "./widgets/ManagementWorkList";
import ManagementHome from "./widgets/ManagementHome";

export type ManagementStepName = "작품관리" | "작품목록";

const ManagementPage = () => {
  const [stepName, setStepName] = useState<ManagementStepName>("작품관리");

  return (
    <main className="w-full flex items-center justify-center pt-12">
      {stepName === "작품관리" && <ManagementHome setStepName={setStepName} />}
      {stepName === "작품목록" && <ManagementWorkList />}
    </main>
  );
};

export default ManagementPage;
