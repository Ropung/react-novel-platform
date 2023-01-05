import MainButton, { DarkButton } from "@styles/ui-components/button";
import { AiOutlineSetting } from "react-icons/ai";

const IsNovel = () => {
  return (
    <ul className="w-full flex flex-col justify-center items-center gap-4 ">
      <li className="w-full flex flex-row justify-center gap-4 border border-gray-300 rounded-md shadow-md p-4">
        {/* 이미지 URL */}
        <div className="w-[20%] overflow-hidden cursor-pointer">
          <img
            className="w-full"
            src="http://image.yes24.com/goods/106211628/XL"
            alt=""
          />
        </div>
        {/* 작품 정보 */}
        <section className="flex flex-1 flex-col gap-2">
          <div className="w-full flex flex-1 flex-col gap-4">
            <div className="w-full flex flex-row gap-2">
              <p className="flex flex-1 items-end font-bold text-lg cursor-pointer">
                어서오세요. 휴남동 서점입니다.123123
              </p>
              <AiOutlineSetting className="w-fit flex justify-end text-3xl cursor-pointer" />
            </div>
            <div className="flex flex-row gap-2 text-gray-500">
              <p>{`장르`}</p>
              <span>&#183;</span>
              <p>총회차:{` -1`}회</p>
              <span>&#183;</span>
              <p>최근등록일:</p>
              <p>{`2023.00.00`}</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                pariatur velit eveniet est ab, repellat quisquam voluptatibus
                ullam officia libero fuga corrupti hic, delectus ex nihil veniam
                illo optio maiores!
              </p>
            </div>
          </div>
          {/* 버튼 <div>*/}
          <div className="w-full h-fit grid grid-cols-3 gap-4">
            <MainButton>이어쓰기</MainButton>
            <MainButton>회차관리</MainButton>
            <MainButton>수정/삭제</MainButton>
          </div>
        </section>
      </li>

      <div className="w-full flex items-center justify-center gap-4">
        <DarkButton>{`<`}</DarkButton>
        <DarkButton>1</DarkButton>
        <DarkButton>2</DarkButton>
        <DarkButton>3</DarkButton>
        <DarkButton>4</DarkButton>
        <DarkButton>5</DarkButton>
        <DarkButton>{`>`}</DarkButton>
      </div>
    </ul>
  );
};

export default IsNovel;
