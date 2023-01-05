import MainButton from "@styles/ui-components/button";
import Path from "@utils/routes/Path";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

const ManagementHome = () => {
  const { MANAGEMENTLIST, MANAGE_ADD } = Path;
  const navigtate = useNavigate();

  const managementMenuList = [
    {
      content: "작품등록",
      linkTo: MANAGE_ADD,
      replace: false,
      position: "management",
    },
    {
      content: "작품목록",
      linkTo: MANAGEMENTLIST,
      replace: false,
      position: "management",
    },
  ];
  return (
    <main className="w-full flex items-center justify-center">
      <div className="w-[80vw] h-full min-h-screen flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="flex-1 font-bold text-xl">내 작품</h1>
          <MainButton
            onClick={() => {
              //
            }}
          >
            새작품 등록하기
          </MainButton>
        </div>
        <section className="grid grid-cols-3 justify-center items-center gap-16">
          <div className="col-span-1 justify-end border border-gray-400 rounded-md shadow-md p-4 cursor-pointer">
            <p className="w-full flex justify-center">연재중인 작품</p>
            <span className="w-full flex justify-center text-main text-3xl">
              {`-1`}
            </span>
          </div>
          <div className="col-span-1 justify-end border border-gray-400 rounded-md shadow-md p-4 cursor-pointer">
            <p className="w-full flex justify-center">완결한 작품</p>
            <span className="w-full flex justify-center text-main text-3xl">
              {`-1`}
            </span>
          </div>
          <div className="col-span-1 justify-end border border-gray-400 rounded-md shadow-md p-4 cursor-pointer">
            <p className="w-full flex justify-center">총 작품</p>
            <span className="w-full flex justify-center text-main text-3xl">
              {`-1`}
            </span>
          </div>
        </section>
        <div className="flex flex-row justify-between items-center">
          <h1 className="flex-1 font-bold text-lg">작품 설정</h1>
        </div>
        <section className="flex flex-col gap-4">
          {managementMenuList.map((item, index) => {
            return (
              <li
                key={index}
                className="flex flex-row items-center justify-between border border-gray-400 shadow-md rounded-md px-4 py-2"
                onClick={() => {
                  navigtate(item.linkTo, { replace: false });
                }}
              >
                <div className="flex flex-col gap-2">
                  <p className="text-dark">{item.content}</p>
                </div>
              </li>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default ManagementHome;
