import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const Agreement마케팅 = () => {
  return (
    <main>
      {/* 모달창닫기 */}
      <aside className=""></aside>
      {/* 기본약관  */}
      <body className="w-[90vw] h-[80vh] bg-white border border-gray-300 shadow-md px-4 pb-20 pt-4 overflow-hidden">
        <header className="flex justify-between items-center l px-2 border-b pb-4">
          <p className="text-4xl">마케팅</p>
        </header>
        <section>
          <p>
            회사는 보다 나은 서비스 제공 및 및 이벤트 등과 같은 마케팅용도
            활용에 대해 원활한 업무 수행을 위해 아래와 같이 외부 전문업체에
            위탁하여 운영하고 있습니다.
          </p>
          <p>- 제공받는 자 : (주) 000</p>
          <p>- 이용목적 : 마케팅을 위한 개인정보 이용</p>
          <p>
            -제공항목 : 구매자정보(이름,전화번호,휴대폰번호,이메일), 상품
            구매/취소/반품/교환/환불 정보, 수령인 정보(이름, 주소, 전화번호,
            휴대폰번호)
          </p>
          <p>
            - 보유/이용기간 : 회원탈퇴 후 일까지 **개인정보 처리위탁을 받는 자는
            이용자의 개인정보를 위탁하는 모든 업체에 대해 명시해야 하며, 수정 후
            쇼핑몰 적용시에는 **내용**은 삭제 후 저장 처리 바랍니다.** 이용자의
            개인정보는 원칙적으로 개인정보의 수집 및 이용 목적 달성 시 지체없이
            파기합니다. 다만 다른 법령에서 별도의 기간을 정하고 있는 경우나
            이용자의 요청에 따라 기간을 달리 정한 경우에는 그 기간이 경과한 후
            파기 등의 필요한 조치를 취합니다.
          </p>
          <p>
            제공받는 자 : 공급사 판매자 - 이용목적 : 판매자와 구매자의 거래의
            원활한 진행, 본인의사의확인, 고객 상담 및 불만처리, 상품과 경품
            배송을 위한 배송지 확인 등 - 제공항목 : 구매자 이름, 전화번호, ID,
            휴대폰번호, 이메일주소, 상품 구매정보, 상품 수취인 정보(이름, 주소,
            전화번호) - 보유/이용기간 : 배송완료 후 한달
          </p>
        </section>
      </body>
    </main>
  );
};

export default Agreement마케팅;
