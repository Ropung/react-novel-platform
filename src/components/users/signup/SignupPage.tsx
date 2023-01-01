import SignupAgreement from "./signup-agreement/SignupAgreement";
import SignInputInfoPage from "./signup-form/SignInputInfoPage";

const SignupPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6 px-16 bg-main bg-opacity-40">
      <section className="flex flex-col items-center justify-center gap-2 py-8">
        <SignupAgreement />
        <SignInputInfoPage />
      </section>
    </div>
  );
};

export default SignupPage;
