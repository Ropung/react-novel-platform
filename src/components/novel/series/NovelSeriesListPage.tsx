import MainButton, { DarkButton } from "@styles/ui-components/button";
import Path from "@utils/routes/Path";
import { Link } from "react-router-dom";

const NovelSeriesListPage = () => {
  const { VIEWER } = Path;

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-[80vw] flex flex-col gap-4 p-4">
        <section className="w-full flex flex-row gap-4">
          {/* 이미지 URL */}
          <div className="w-[20%]">
            <img
              className="w-[200px]"
              src="http://image.yes24.com/goods/106211628/XL"
              alt=""
            />
          </div>
          {/* 작품 정보 */}
          <div className="w-[80%] h-full flex flex-col justify-between items-center gap-2">
            <div className="w-full h-[30%] flex flex-col gap-2 justify-start">
              <p className="font-bold text-3xl">
                어서오세요. 휴남동 서점입니다.
              </p>
              <div className="flex flex-row gap-2">
                <p>작가이름</p>
                <span>&#183;</span>
                <p>조회수</p>
                <span>&#183;</span>
                <p>장르</p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-8 justify-end items-start">
              <p>
                {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                pariatur velit eveniet est ab, repellat quisquam voluptatibus
                ullam officia libero fuga corrupti hic, delectus ex nihil veniam
                illo optio maiores! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Fugit pariatur velit eveniet est ab, repellat
                quisquam voluptatibus ullam officia libero fuga corrupti hic,
                delectus ex nihil veniam illo optio maiores!`}
              </p>
              <div className="w-full flex flex-row justify-start gap-4">
                <MainButton className="w-[40%] !py-4 !font-bold text-2xl">
                  첫회보기
                </MainButton>
                <MainButton className="w-[40%] !py-4 !font-bold text-2xl">
                  즐겨찾기
                </MainButton>
              </div>
            </div>
          </div>
        </section>
        <p className="border-b py-4" />
        {/* 작품회차 */}
        <section className="w-full">
          <div className="w-full flex justify-between">
            <div className="flex flex-row justify-start items-center gap-2 py-2">
              <h1 className="font-bold text-2xl">작품회차</h1>
              <span className="text-gray-400">({`-100`})</span>
            </div>
            <div className="flex gap-2 divide-x items-end">
              <p className="cursor-pointer">최신순</p>
              <p className="cursor-pointer pl-2">첫화</p>
            </div>
          </div>
        </section>
        {/* Novel Series List */}
        <ul className="flex flex-col gap-4">
          <li className="w-full">
            <Link
              to={VIEWER}
              className="w-full flex flex-row gap-8 cursor-pointer"
            >
              {/* 이미지 URL */}
              <img
                className="w-[150px] h-[120px]"
                src="http://image.yes24.com/goods/106211628/XL"
                alt=""
              />
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="w-full flex flex-col gap-2 justify-center ">
                  <span className="font-bold">{`1화`}</span>
                  <p className="font-bold text-xl">
                    어서오세요. 휴남동 서점입니다.
                  </p>
                  <div className="flex flex-row gap-2 text-gray-400">
                    <span>{`좋아요수`}</span>
                    <span>{`즐찾수`}</span>
                    <span>{`1999.09.01`}</span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
        <div className="w-full flex items-center justify-center py-10 gap-4">
          <DarkButton>{`<`}</DarkButton>
          <DarkButton>1</DarkButton>
          <DarkButton>2</DarkButton>
          <DarkButton>3</DarkButton>
          <DarkButton>4</DarkButton>
          <DarkButton>5</DarkButton>
          <DarkButton>{`>`}</DarkButton>
        </div>
      </div>
    </div>
  );
};

export default NovelSeriesListPage;
