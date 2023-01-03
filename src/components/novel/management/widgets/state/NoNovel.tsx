import { GrBook } from "react-icons/gr";

const NoNovel = () => {
  return (
    // 작품이 없을떄
    <div className="w-full flex flex-col justify-center items-center gap-6 opacity-20 py-10">
      <GrBook className="w-fit flex justify-end text-6xl" />
      <div className="flex flex-col text-lg">
        <p>현재 작품이 없습니다.</p>
        <p>새작품을 등록해보세요!</p>
      </div>
    </div>
  );
};

export default NoNovel;
