import CheckableBox from "@/styles/ui-components/CheckableBox";
import AgreementCheck from "@/styles/ui-components/CheckIcon";
import { FunctionComponent, useState } from "react";
import { FaAngleRight, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

import { AiFillCloseSquare } from "react-icons/ai";
import Agreement기본약관 from "./modal-content/Agreement기본약관";
import Agreement개인정보 from "./modal-content/Agreement개인정보";
import Agreement위치기반서비스 from "./modal-content/Agreement위치기반서비스";
import Agreement마케팅 from "./modal-content/Agreement마케팅";
import useAgreementStore from "@/store/agreement/agreementStore";
import { LinkButton, DarkButton } from "@styles/ui-components/button";

const SignupAgreement = () => {
  interface 필수약관인터페이스 {
    기본약관: boolean;
    개인정보: boolean;
    위치기반서비스: boolean;
  }

  interface 선택약관인터페이스 {
    마케팅: boolean;
  }

  interface 전문보기인터페이스 {
    기본약관: React.ReactNode;
    개인정보?: React.ReactNode;
    위치기반서비스: React.ReactNode;
    마케팅: React.ReactNode;
  }

  const 전문보기컴포넌트목록: 전문보기인터페이스 = {
    기본약관: <Agreement기본약관 />,
    개인정보: <Agreement개인정보 />,
    위치기반서비스: <Agreement위치기반서비스 />,
    마케팅: <Agreement마케팅 />,
  };

  const [initialAgreements, setInitialAgreements] =
    useState<필수약관인터페이스>({
      기본약관: false,
      개인정보: false,
      위치기반서비스: false,
    });

  // const [optionalAgreements, setOptionalAgreements] =
  //   useState<선택약관인터페이스>({
  //     마케팅: false,
  //   });
  const [initialChecked, setInitialChecked] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [전문보기선택된약관, set전문보기선택된약관] =
    useState<React.ReactNode>("기본약관");
  const [is전문보기Open, set전문보기Open] = useState<boolean>(false);
  const { optionalAgreements, setOptionalAgreements } = useAgreementStore();

  type InitialAgreementKeyName = keyof 필수약관인터페이스; // "기본약관" | "개인정보동의" | "위치기반서비스"
  type OptionalAgreementKeyName = keyof 선택약관인터페이스; // "마케팅"이라는 타입

  const changeInitialAgreementOf = (agreementName: InitialAgreementKeyName) => {
    const newObject = {
      ...initialAgreements,
      [agreementName]: !initialAgreements[agreementName],
    };
    setInitialAgreements(newObject);

    // all checked(전체 선택)에 결과 반영
    const initialChecked = Object.values(newObject).every(
      (result) => result === true
    );
    const optionalChecked = Object.values(optionalAgreements).every(
      (result) => result === true
    );

    setInitialChecked(initialChecked);
    setAllChecked(initialChecked && optionalChecked);
  };

  const changeOptionalAgreementOf = (
    agreementName: OptionalAgreementKeyName
  ) => {
    const newObject = {
      ...optionalAgreements,
      [agreementName]: !optionalAgreements[agreementName],
    };
    setOptionalAgreements(newObject);

    // // all checked(전체 선택)에 결과 반영
    let allChecked = Object.values(newObject).every(
      (result) => result === true
    );
    allChecked &&= Object.values(initialAgreements).every(
      (result) => result === true
    );
    setAllChecked(allChecked);
  };

  const toggleAllChekced = () => {
    const commonChecked = !allChecked;

    Object.keys(initialAgreements).forEach(
      (keyName) =>
        (initialAgreements[keyName as InitialAgreementKeyName] = commonChecked)
    );

    Object.keys(optionalAgreements).forEach(
      (keyName) =>
        (optionalAgreements[keyName as OptionalAgreementKeyName] =
          commonChecked)
    );

    setInitialChecked(commonChecked);
    setAllChecked(commonChecked);
  };

  const callModalOf = (
    약관이름: InitialAgreementKeyName | OptionalAgreementKeyName
  ) => {
    set전문보기Open(true);
    set전문보기선택된약관(전문보기컴포넌트목록[약관이름]);
  };

  return (
    <section>
      <div className="border border-gray-800 shadow-md rounded-md bg-light p-8">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <CheckableBox
            checked={allChecked}
            onChange={toggleAllChekced}
            className={`w-[100%] flex justify-center border border-gray-500 !text-gary-500 checked-bg:!text-black`}
          >
            <p className="flex justify-center gap-4 items-center text-3xl leading-4">
              <FaCheck />
              <span className=" py-4 font-bold">전체동의</span>
            </p>
          </CheckableBox>
          {/* 약관 리스트 */}
          <ul className="flex flex-wrap px-2">
            <li className="w-full flex justify-between items-center">
              <label className="flex gap-2">
                <AgreementCheck
                  checked={initialAgreements.기본약관}
                  content="싸요싸 멤버십 회원 이용약관(필수)"
                  onChange={() => changeInitialAgreementOf("기본약관")}
                />
              </label>
              {/* 이용약관 */}
              <LinkButton
                className="whitespace-nowrap"
                onClick={() => callModalOf("기본약관")}
              >
                전문보기
              </LinkButton>
            </li>
            <li className="w-full flex justify-between items-center">
              <label className="flex gap-2">
                <AgreementCheck
                  checked={initialAgreements.개인정보}
                  content="개인정보 수집 및 이용 동의 (필수)"
                  onChange={() => changeInitialAgreementOf("개인정보")}
                />
              </label>
              {/* 개인정보 수집이용  */}
              <LinkButton
                className="whitespace-nowrap"
                onClick={() => callModalOf("개인정보")}
              >
                전문보기
              </LinkButton>
            </li>
            <li className="w-full flex justify-between items-center">
              <label className="flex gap-2">
                <AgreementCheck
                  checked={initialAgreements.위치기반서비스}
                  content="위치기반 서비스 이용약관 동의(필수)"
                  onChange={() => changeInitialAgreementOf("위치기반서비스")}
                />
              </label>
              {/* 위치기반  */}
              <LinkButton
                className="whitespace-nowrap"
                onClick={() => callModalOf("위치기반서비스")}
              >
                전문보기
              </LinkButton>
            </li>
            <li className="w-full flex justify-between items-center">
              <label className="flex gap-2">
                <AgreementCheck
                  checked={optionalAgreements.마케팅}
                  content="마케팅 수신 동의(선택)"
                  onChange={() => changeOptionalAgreementOf("마케팅")}
                />
              </label>
              <LinkButton onClick={() => callModalOf("마케팅")}>
                전문보기
              </LinkButton>
            </li>
          </ul>
        </div>
      </div>
      {is전문보기Open ? (
        <div
          className={`fixed right-0 left-0 top-0 bottom-0 flex flex-col justify-center items-center z-auto 
         `}
        >
          <aside
            className="fixed right-0 left-0 top-0 bottom-0 -z-10 bg-dark"
            onClick={() => set전문보기Open(false)}
          />
          <section className="relative pt-44 pb-20">
            <header className="absolute  pt-44 pb-20 w-fit h-fit right-6 top-4">
              <AiFillCloseSquare
                className="text-5xl"
                onClick={() => set전문보기Open(false)}
              />
            </header>
            <article>{전문보기선택된약관}</article>
          </section>
        </div>
      ) : (
        <span></span>
      )}
    </section>
  );
};

export default SignupAgreement;
