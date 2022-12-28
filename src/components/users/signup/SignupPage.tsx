import MainButton from "@styles/ui-components/button";
import SignupAgreement from "./signup-agreement/SignupAgreement";
import SignInputInfoPage from "./signup-form/SignInputInfoPage";

const SignupPage = () => {
  return (
    <div className="flex flex-col gap-6 px-16 py-8 bg-main bg-opacity-60">
      <section className="flex flex-col items-center justify-center gap-2">
        <SignupAgreement />
        <SignInputInfoPage />
      </section>
    </div>
  );
};

export default SignupPage;
