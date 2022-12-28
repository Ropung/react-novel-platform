import novelsProps from "@models/novel/novel";
import { BsFilterSquare } from "react-icons/bs";

const NovelPage = () => {
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
    <main className="w-full flex items-center justify-center pt-20">
      <div className="w-[80vw] flex flex-col gap-4">
        {/* Top h1 line */}
        <section className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <section className="flex flex-row gap-8">
              <h1 className="text-4xl">작품목록</h1>
            </section>
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
              <li key={`tag-${item.tag}`}>
                <p>{item.tag}</p>
              </li>
            ))}
          </ul>
        </section>
        {/* Novel List */}
        <section className="">
          <ul className="w-full flex flex-wrap">
            <li className="w-1/2 h-fit overflow-hidden bg-main bg-opacity-30 p-4 pb-16">
              <section className="w-full flex flex-row gap-4">
                {/* 이미지 URL */}
                <div className="w-[30%]">
                  <img src="http://image.yes24.com/goods/106211628/XL" alt="" />
                </div>
                {/* 작품 정보 */}
                <div className="w-[70%] flex flex-col gap-2">
                  <p className="font-bold text-3xl">1</p>
                  <p className="font-bold text-lg">
                    어서오세요. 휴남동 서점입니다.
                  </p>
                  <div className="flex flex-row gap-2">
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
              </section>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default NovelPage;
