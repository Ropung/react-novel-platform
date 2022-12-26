import AuthInfo from "@models/user/AuthInfo";
import UserInfo, { UserInfoInput } from "@models/user/UserInfo";
import { useCallback, useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignInputInfoPage = () => {
  const userEmailRef = useRef<HTMLInputElement | null>(null);
  const passwordFormRef = useRef<HTMLInputElement | null>(null);
  const passwordFirmFormRef = useRef<HTMLInputElement | null>(null);
  const bYearRef = useRef<HTMLSelectElement | null>(null);
  const bMonthRef = useRef<HTMLSelectElement | null>(null);
  const bDateRef = useRef<HTMLSelectElement | null>(null);

  const authorNameRef = useRef<HTMLInputElement | null>(null);
  const fullnameRef = useRef<HTMLInputElement | null>(null);

  const [canSeePW, setCanSeePW] = useState<boolean>(false);
  const [canSeeFirmPW, setCanSeeFirmPW] = useState<boolean>(false);

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

  // focused map
  // const [focusedMap, setFocusedMap] = useState<{
  //   [name in keyof Partial<UserInfo> & Partial<AuthInfo>]: boolean;
  // }>({});

  return (
    <div className="flex flex-col gap-4">
      {/* 아이디 */}
      <fieldset className="flex flex-col gap-2">
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
          onChange={(evt) => {}}
          required
        />
      </fieldset>
      {/* 비밀번호 */}
      <fieldset className="flex flex-col gap-2">
        <p
          className={`font-bold after:content-['*'] after:ml-0.5 after:text-red-500`}
        >
          비밀번호
        </p>
        <label className="relative">
          <input
            ref={passwordFormRef}
            className={`border w-full leading-8 rounded-sm valid:border-success`}
            type={canSeePW ? "text" : "password"}
            name="password"
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
      <fieldset className="flex flex-col gap-2">
        <p
          className={`font-bold after:content-['*'] after:ml-0.5 after:text-red-500`}
        >
          비밀번호 확인
        </p>
        <label className="relative">
          <input
            ref={passwordFirmFormRef}
            className={`border w-full leading-8 rounded-sm valid:border-success`}
            type={canSeeFirmPW ? "text" : "password"}
            name="password"
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
      <fieldset className="flex flex-col gap-2">
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
      <fieldset className="flex flex-col gap-2">
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
      <fieldset>
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
    </div>
  );
};

export default SignInputInfoPage;
