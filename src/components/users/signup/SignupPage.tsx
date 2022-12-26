import MainButton from "@styles/ui-components/button";
import { FunctionComponent } from "react";
import SignupAgreement from "./signup-agreement/SignupAgreement";
import SignInputInfoPage from "./signup-form/SignInputInfoPage";

const SignupPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="w-full text-left text-2xl">
        {/* <SignHeaderItem /> */}
        <p className="text-xl py-2 font-bold">정보 입력 및 약관동의</p>
      </h1>
      <SignInputInfoPage />
      <SignupAgreement />
      <MainButton className="text-3xl">가입신청</MainButton>
    </div>
  );
};

export default SignupPage;
