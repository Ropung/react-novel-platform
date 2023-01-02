import MainButton, { DarkButton } from "@styles/ui-components/button";
import { auth } from "@utils/firebase";
import { signIn, signUp } from "@utils/firebase/user";
import Path from "@utils/routes/Path";
import { useLayoutEffect, useRef, useState } from "react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillTrademarkCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LoginInputInfoPage = () => {
  const { SIGNUP, NOVEL, HOME } = Path;
  const navigate = useNavigate();

  const [canSeePW, setCanSeePW] = useState<boolean>(false);

  const userEmailRef = useRef<HTMLInputElement | null>(null);
  const userPasswordFormRef = useRef<HTMLInputElement | null>(null);

  return (
    <section className="w-[60vw] flex flex-col gap-8 items-center justify-center bg-white py-20 px-8 border rounded-xl shadow-md">
      <div className="flex flex-col gap-2 text-4xl border px-12 py-6 rounded-full bg-main font-bold">
        <h1 className="">Ropung</h1>
      </div>
      {/* 입력 폼 section */}
      <section className="w-full flex flex-col gap-4 text-lg">
        <div className="flex flex-col gap-2">
          {/* 아이디 */}
          <fieldset className="w-full flex flex-col gap-2">
            <input
              className={`border w-full h-8 rounded-sm py-8 px-4`}
              type="email"
              name="email"
              placeholder="아이디(이메일)"
              ref={userEmailRef}
              onChange={(evt) => {
                const newregisterEmail = evt.target.value;
                console.log(newregisterEmail);
              }}
              required
            />
          </fieldset>
          {/* 비밀번호 */}
          <fieldset className="w-full flex flex-col gap-2">
            <label className="relative">
              <input
                ref={userPasswordFormRef}
                className={`border w-full h-8 rounded-sm py-8 px-4 valid:border-success`}
                type={canSeePW ? "text" : "password"}
                name="password"
                placeholder="비밀번호"
                onChange={(evt) => {
                  // Check if 한글입력 등 when type="text"
                  const passwordExp = /[^A-Za-z\d$@$!%*#?&]/g;
                  evt.target.value = evt.target.value.replace(passwordExp, "");
                }}
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$"
                required
              />
              <span
                className="absolute right-0 top-0 bottom-0 flex items-center -translate-x-1/2"
                onClick={() => {
                  setCanSeePW(!canSeePW);
                }}
              >
                {canSeePW && (
                  <AiFillEye className="text-gray-600 min-w-[1.5rem] min-h-[1.5rem]" />
                )}
                {!canSeePW && (
                  <AiFillEyeInvisible className="text-gray-600 min-w-[1.5rem] min-h-[1.5rem]" />
                )}
              </span>
            </label>
          </fieldset>
        </div>
        {/* 버튼 div */}
        <div className="w-full flex flex-col gap-4 text-2xl font-bold">
          <MainButton
            className="w-full !py-4"
            onClick={() => {
              signIn(
                userEmailRef.current?.value ?? "",
                userPasswordFormRef.current?.value ?? ""
              )
                .then((result) => {
                  console.log("로그인성공:", result);
                  navigate(HOME, { replace: true });
                })
                .catch(console.error);
            }}
          >
            로그인
          </MainButton>

          <DarkButton
            className="w-full !py-4"
            onClick={() => {
              navigate(SIGNUP, { replace: true });
            }}
          >
            회원가입
          </DarkButton>
        </div>
      </section>

      <section className="w-full flex flex-col gap-6 items-center justify-center px-16">
        <div className="text-xl">SNS 계정 로그인</div>
        <div className="w-full border-b" />
        <div className="flex flex-row gap-10 text-5xl">
          <AiFillTrademarkCircle />
          <AiFillTrademarkCircle />
          <AiFillTrademarkCircle />
        </div>
      </section>
    </section>
  );
};

export default LoginInputInfoPage;
