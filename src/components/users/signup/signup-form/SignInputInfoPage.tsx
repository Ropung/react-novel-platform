import MainButton from "@styles/ui-components/button";
import { auth } from "@utils/firebase";
import { signUp } from "@utils/firebase/user";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignInputInfoPage = () => {
  const userEmailRef = useRef<HTMLInputElement | null>(null);
  const userPasswordFormRef = useRef<HTMLInputElement | null>(null);
  const userPasswordFirmFormRef = useRef<HTMLInputElement | null>(null);
  const bYearRef = useRef<HTMLSelectElement | null>(null);
  const bMonthRef = useRef<HTMLSelectElement | null>(null);
  const bDateRef = useRef<HTMLSelectElement | null>(null);

  const authorNameRef = useRef<HTMLInputElement | null>(null);
  const fullnameRef = useRef<HTMLInputElement | null>(null);

  const [canSeePW, setCanSeePW] = useState<boolean>(false);
  const [canSeeFirmPW, setCanSeeFirmPW] = useState<boolean>(false);

  // 가입신청 공백체크
  const [validPassed, setValidPassed] = useState<boolean>(true);

  useLayoutEffect(() => {
    //
  }, []);

  const now = new Date();
  const today = new Date(
    `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() + 1}`
  );

  const thisYear = now.getFullYear();
  const [monthlyDates, setMonthlyDates] = useState<number[]>(
    [...new Array(31)].map((_, index) => index + 1)
  );

  const onBirthChange = useCallback(() => {
    const year = (bYearRef.current?.selectedIndex ?? 100) + 1900;
    const monthIdx = bMonthRef.current?.selectedIndex ?? 0;
    const dateIdx = bDateRef.current?.selectedIndex ?? 0;

    setMonthlyDates(
      [
        ...new Array(
          [
            31,
            28 + +((((year & 3) === 0) == !(year % 100)) == !(year % 400)),
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31,
          ][monthIdx]
        ),
      ].map((_, index) => index + 1)
    );
  }, []);

  return (
    <section className="flex flex-col w-[60vw] gap-8 items-center justify-center bg-white py-4 px-6 border rounded-xl shadow-md">
      <div className="w-full text-left text-2xl">
        {/* <SignHeaderItem /> */}
        <h1 className="text-2xl py-2 font-bold">정보 입력</h1>
        <div className="w-full border-b" />
      </div>
      <section className="w-full flex flex-col gap-2">
        {/* 아이디 */}
        <fieldset className="w-full flex flex-col gap-1">
          <p
            className={`font-bold after:content-['*'] after:ml-0.5 after:text-red-500`}
          >
            아이디(이메일)
          </p>
          <input
            className={`border w-full leading-8 rounded-sm `}
            type="email"
            name="email"
            ref={userEmailRef}
            onChange={(evt) => {
              const newregisterEmail = evt.target.value;
              console.log(newregisterEmail);
            }}
            required
          />
        </fieldset>
        {/* 비밀번호 */}
        <fieldset className="w-full flex flex-col gap-1">
          <p
            className={`font-bold after:content-['*'] after:ml-0.5 after:text-red-500`}
          >
            비밀번호
          </p>
          <label className="relative">
            <input
              ref={userPasswordFormRef}
              className={`border w-full leading-8 rounded-sm valid:border-success`}
              type={canSeePW ? "text" : "password"}
              name="password"
              onChange={(evt) => {
                // Check if 한글입력 등 when type="text"
                const passwordExp = /[^A-Za-z\d$@$!%*#?&]/g;
                const newRegisterPassword = evt.target.value;
                newRegisterPassword.replace(passwordExp, "");
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
        {/* 비밀번호 확인 */}
        <fieldset className="w-full flex flex-col gap-1">
          <p
            className={`font-bold after:content-['*'] after:ml-0.5 after:text-red-500`}
          >
            비밀번호 확인
          </p>
          <label className="relative">
            <input
              ref={userPasswordFirmFormRef}
              className={`border w-full leading-8 rounded-sm valid:border-success`}
              type={canSeeFirmPW ? "text" : "password"}
              name="password"
              onChange={(evt) => {
                // Check if 한글입력 등 when type="text"
                const passwordExp = /[^A-Za-z\d$@$!%*#?&]/g;
                const newRegisterFirmPassword = evt.target.value;
                newRegisterFirmPassword.replace(passwordExp, "");
              }}
              pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$"
              required
            />
            <span
              className="absolute right-0 top-0 bottom-0 flex items-center -translate-x-1/2"
              onClick={() => {
                setCanSeeFirmPW(!canSeeFirmPW);
              }}
            >
              {canSeeFirmPW && (
                <AiFillEye className="text-gray-600 min-w-[1.5rem] min-h-[1.5rem]" />
              )}
              {!canSeeFirmPW && (
                <AiFillEyeInvisible className="text-gray-600 min-w-[1.5rem] min-h-[1.5rem]" />
              )}
            </span>
          </label>
        </fieldset>
        {/* 필명(닉네임) */}
        <fieldset className="w-full flex flex-col gap-1">
          <p
            className={`font-bold after:content-['*'] after:ml-0.5 after:text-red-500`}
          >
            필명(닉네임)
          </p>
          <input
            className={`border w-full leading-8 rounded-sm`}
            type="text"
            name="authorName"
            ref={authorNameRef}
            maxLength={13}
            minLength={4}
            onChange={(evt) => {
              //
            }}
            required
          />
        </fieldset>
        {/* 이름 */}
        <fieldset className="w-full flex flex-col gap-1">
          <p
            className={`font-bold after:content-['*'] after:ml-0.5 after:text-red-500`}
          >
            이름
          </p>
          <input
            className={`border w-full leading-8 rounded-sm`}
            type="text"
            name="fullname"
            ref={fullnameRef}
            onChange={(evt) => {
              evt.target.value = evt.target.value.replace(/[^ㄱ-ㅎ가-힣]/g, "");
            }}
            required
          />
        </fieldset>
        {/* 생년월일 */}
        <fieldset className="w-full flex flex-col gap-1">
          <p className="font-bold after:content-['*'] after:ml-0.5 after:text-red-500">
            생년월일
          </p>
          <div className="w-full grid grid-cols-3 items-center gap-2">
            <select
              name="birth"
              ref={bYearRef}
              onChange={onBirthChange}
              className={`text-right border rounded-sm py-2 disabled:border-2 disabled:border-success disabled:bg-gray-400 disabled:text-black disabled:font-bold`}
            >
              {[...new Array(thisYear - 1899)].map((_, index, array) => {
                const year = 1900 + index;
                return (
                  <option key={`year-key-${year}`} selected={year === 1992}>
                    {year}
                  </option>
                );
              })}
            </select>
            <select
              name="birth"
              className={`text-right border leading-8 rounded-sm py-2 disabled:border-2 disabled:border-success disabled:bg-gray-400 disabled:text-black disabled:font-bold`}
              ref={bMonthRef}
              onChange={onBirthChange}
            >
              {[...new Array(12)].map((_, index, array) => (
                <option
                  key={`monthly-key-${index}`}
                  className="bg-dark text-light"
                >
                  {1 + index}
                </option>
              ))}
            </select>
            <select
              name="birth"
              className={`text-right border leading-8 rounded-sm py-2 disabled:border-2 disabled:border-success disabled:bg-gray-400 disabled:text-black disabled:font-bold`}
              ref={bDateRef}
              onChange={onBirthChange}
            >
              {monthlyDates.map((date) => (
                <option key={`date-key-${date}`}>{date}</option>
              ))}
            </select>
          </div>
        </fieldset>
      </section>
      <MainButton
        className={`w-full !py-4 !rounded-lg font-bold text-3xl ${
          !validPassed ? "bg-default" : ""
        }`}
        // disabled={validPassed}
        onClick={() => {
          signUp(
            userEmailRef.current?.value ?? "",
            userPasswordFormRef.current?.value ?? ""
          )
            .then((result) => console.log("result:", result))
            .catch(console.error);
        }}
      >
        가입신청
      </MainButton>
    </section>
  );
};

export default SignInputInfoPage;
