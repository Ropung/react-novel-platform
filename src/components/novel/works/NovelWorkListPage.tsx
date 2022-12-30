import novelsProps from "@models/novel/novel";
import { DarkButton } from "@styles/ui-components/button";
import Path from "@utils/routes/Path";
import { BsFilterSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const NovelWorkListPage = () => {
  const { SERIES } = Path;

  type novelTagsProps = Pick<novelsProps, "tag">;
  const novelTags: novelTagsProps[] = [
    {
      tag: "요일",
    },
    {
      tag: "랭킹",
    },
    {
      tag: "신작",
    },
    {
      tag: "인기",
    },
    {
      tag: "완결",
    },
  ];

  return (
    <main className="w-full flex items-center justify-center">
      <div className="w-[80vw] flex flex-col gap-4 pt-12">
        {/* Top h1 line */}
        <section className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <div className="flex flex-row gap-8">
              <h1 className="text-4xl">작품목록</h1>
            </div>
            <section className="flex flex-row gap-8 items-center justify-end">
              <input className="border rounded-md h-8" placeholder="검색" />
              <div className="flex flex-row gap-2 items-center justify-end text-2xl">
                <p>필터</p>
                <BsFilterSquare />
              </div>
            </section>
          </div>
          <p className="border-b-2" />
          <ul className="flex flex-row gap-4 items-end">
            {novelTags.map((item) => (
              <li key={`tag-${item.tag}`} className="cursor-pointer">
                <p>{item.tag}</p>
              </li>
            ))}
          </ul>
        </section>
        {/* Novel List */}
        <section className="py-10">
          <ul className="w-full flex flex-wrap">
            <li className="w-1/2 overflow-hidden p-4 pb-12">
              <Link to={SERIES} className="w-full flex flex-row gap-4">
                {/* 이미지 URL */}
                <div className="w-[30%]">
                  <img src="http://image.yes24.com/goods/106211628/XL" alt="" />
                </div>
                {/* 작품 정보 */}
                <div className="w-[70%] flex flex-col gap-2">
                  <div className="w-full flex flex-row gap-2">
                    <p className="font-bold text-3xl">1</p>
                    <p className="flex items-end font-bold text-lg">
                      어서오세요. 휴남동 서점입니다.
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 text-gray-500">
                    <p>작가이름</p>
                    <span>&#183;</span>
                    <p>조회수</p>
                    <span>&#183;</span>
                    <p>장르</p>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Fugit pariatur velit eveniet est ab, repellat quisquam
                      voluptatibus ullam officia libero fuga corrupti hic,
                      delectus ex nihil veniam illo optio maiores!
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="w-1/2 overflow-hidden p-4 pb-12">
              <Link to={SERIES} className="w-full flex flex-row gap-4">
                {/* 이미지 URL */}
                <div className="w-[30%]">
                  <img src="http://image.yes24.com/goods/106211628/XL" alt="" />
                </div>
                {/* 작품 정보 */}
                <div className="w-[70%] flex flex-col gap-2">
                  <div className="w-full flex flex-row gap-2">
                    <p className="font-bold text-3xl">1</p>
                    <p className="flex items-end font-bold text-lg">
                      어서오세요. 휴남동 서점입니다.
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 text-gray-500">
                    <p>작가이름</p>
                    <span>&#183;</span>
                    <p>조회수</p>
                    <span>&#183;</span>
                    <p>장르</p>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Fugit pariatur velit eveniet est ab, repellat quisquam
                      voluptatibus ullam officia libero fuga corrupti hic,
                      delectus ex nihil veniam illo optio maiores!
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="w-1/2 overflow-hidden p-4 pb-12">
              <Link to={SERIES} className="w-full flex flex-row gap-4">
                {/* 이미지 URL */}
                <div className="w-[30%]">
                  <img src="http://image.yes24.com/goods/106211628/XL" alt="" />
                </div>
                {/* 작품 정보 */}
                <div className="w-[70%] flex flex-col gap-2">
                  <div className="w-full flex flex-row gap-2">
                    <p className="font-bold text-3xl">1</p>
                    <p className="flex items-end font-bold text-lg">
                      어서오세요. 휴남동 서점입니다.
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 text-gray-500">
                    <p>작가이름</p>
                    <span>&#183;</span>
                    <p>조회수</p>
                    <span>&#183;</span>
                    <p>장르</p>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Fugit pariatur velit eveniet est ab, repellat quisquam
                      voluptatibus ullam officia libero fuga corrupti hic,
                      delectus ex nihil veniam illo optio maiores!
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="w-1/2 overflow-hidden p-4 pb-12">
              <Link to={SERIES} className="w-full flex flex-row gap-4">
                {/* 이미지 URL */}
                <div className="w-[30%]">
                  <img src="http://image.yes24.com/goods/106211628/XL" alt="" />
                </div>
                {/* 작품 정보 */}
                <div className="w-[70%] flex flex-col gap-2">
                  <div className="w-full flex flex-row gap-2">
                    <p className="font-bold text-3xl">1</p>
                    <p className="flex items-end font-bold text-lg">
                      어서오세요. 휴남동 서점입니다.
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 text-gray-500">
                    <p>작가이름</p>
                    <span>&#183;</span>
                    <p>조회수</p>
                    <span>&#183;</span>
                    <p>장르</p>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Fugit pariatur velit eveniet est ab, repellat quisquam
                      voluptatibus ullam officia libero fuga corrupti hic,
                      delectus ex nihil veniam illo optio maiores!
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="w-1/2 overflow-hidden p-4 pb-12">
              <Link to={SERIES} className="w-full flex flex-row gap-4">
                {/* 이미지 URL */}
                <div className="w-[30%]">
                  <img src="http://image.yes24.com/goods/106211628/XL" alt="" />
                </div>
                {/* 작품 정보 */}
                <div className="w-[70%] flex flex-col gap-2">
                  <div className="w-full flex flex-row gap-2">
                    <p className="font-bold text-3xl">1</p>
                    <p className="flex items-end font-bold text-lg">
                      어서오세요. 휴남동 서점입니다.
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 text-gray-500">
                    <p>작가이름</p>
                    <span>&#183;</span>
                    <p>조회수</p>
                    <span>&#183;</span>
                    <p>장르</p>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Fugit pariatur velit eveniet est ab, repellat quisquam
                      voluptatibus ullam officia libero fuga corrupti hic,
                      delectus ex nihil veniam illo optio maiores!
                    </p>
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
        </section>
      </div>
    </main>
  );
};

export default NovelWorkListPage;
