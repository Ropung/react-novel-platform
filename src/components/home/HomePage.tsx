import bannersProps from "@/models/banner/banner";
import novelsProps from "@/models/novel/novel";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const HomePage = () => {
  const bannerList: bannersProps[] = [
    {
      url: "http://blog.jinbo.net/attach/615/200937431.jpg",
      alt: "이미지01",
      bannerid: "banner-01",
    },
    {
      url: "https://cdn.pixabay.com/photo/2022/12/07/12/56/morning-mist-7641122_1280.jpg",
      alt: "이미지02",
      bannerid: "banner-02",
    },
    {
      url: "https://cdn.pixabay.com/photo/2022/07/09/10/11/insect-7310563_1280.jpg",
      alt: "이미지03",
      bannerid: "banner-03",
    },
  ];

  const novelList: novelsProps[] = [
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      novelid: "novel-1",
      kategorie: "",
      tag: "",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지02",
      novelid: "novel-2",
      kategorie: "",
      tag: "",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지03",
      novelid: "novel-3",
      kategorie: "",
      tag: "",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지03",
      novelid: "novel-4",
      kategorie: "",
      tag: "",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지03",
      novelid: "novel-5",
      kategorie: "",
      tag: "",
    },
  ];

  return (
    <main className="w-full flex items-center justify-center pt-20">
      <div className="w-[80vw] flex flex-col gap-16">
        {/* 상단 슬라이드배너 */}
        <div className="flex flex-row gap-2 py-4">
          {bannerList.map((item) => (
            <div
              key={`bannerid-${item.bannerid}`}
              className="w-full flex gap-2 px-4"
            >
              <img className="" src={item.url} alt={item.alt} />
            </div>
          ))}
        </div>
        {/* 테마 별 작품 목록 */}
        <div className="flex flex-col gap-32">
          <ul className="w-full flex flex-col gap-2">
            {/* 카테고리별나누기 map 함수로 */}
            <li className="flex flex-col gap-4">
              {/* Title */}
              <div className="w-full flex flex-row justify-between items-center">
                <p className="text-4xl font-bold">오늘의 인기작</p>
                <div className="flex flex-row gap-2 justify-end text-4xl">
                  <BsArrowLeftSquareFill className="cursor-pointer" />
                  <BsArrowLeftSquareFill className=" cursor-pointer rotate-180" />
                </div>
              </div>
              {/* Novel List */}
              <ul className="w-full flex flex-row gap-2 overflow-hidden">
                {novelList.map((item) => (
                  <li key={item.novelid} className="w-[20%]">
                    <div className="flex flex-col gap-4">
                      <img
                        className="w-full px-2"
                        src="http://image.yes24.com/goods/106211628/XL"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          {/* 테마 별 작품 목록 */}
          <ul className="w-full flex flex-col gap-8">
            {/* 카테고리별나누기 map 함수로 */}
            <li className="flex flex-col gap-4">
              {/* Title */}
              <div className="w-full flex flex-row justify-between items-center">
                <p className="text-4xl font-bold">오늘의 인기작</p>
                <div className="flex flex-row gap-2 justify-end text-4xl">
                  <BsArrowLeftSquareFill className="cursor-pointer" />
                  <BsArrowLeftSquareFill className=" cursor-pointer rotate-180" />
                </div>
              </div>
              {/* Novel List */}
              <ul className="w-full flex flex-row gap-2 overflow-hidden">
                {novelList.map((item) => (
                  <li key={item.novelid} className="w-[20%]">
                    <div className="flex flex-col gap-4">
                      <img
                        className="w-full px-2"
                        src="http://image.yes24.com/goods/106211628/XL"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          {/* 테마 별 작품 목록 */}
          <ul className="w-full flex flex-col gap-8">
            {/* 카테고리별나누기 map 함수로 */}
            <li className="flex flex-col gap-4">
              {/* Title */}
              <div className="w-full flex flex-row justify-between items-center">
                <p className="text-4xl font-bold">오늘의 인기작</p>
                <div className="flex flex-row gap-2 justify-end text-4xl">
                  <BsArrowLeftSquareFill className="cursor-pointer" />
                  <BsArrowLeftSquareFill className=" cursor-pointer rotate-180" />
                </div>
              </div>
              {/* Novel List */}
              <ul className="w-full flex flex-row gap-2 overflow-hidden">
                {novelList.map((item) => (
                  <li key={item.novelid} className="w-[20%]">
                    <div className="flex flex-col gap-4">
                      <img
                        className="w-full px-2"
                        src="http://image.yes24.com/goods/106211628/XL"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          {/* 테마 별 작품 목록 */}
          <ul className="w-full flex flex-col gap-8">
            {/* 카테고리별나누기 map 함수로 */}
            <li className="flex flex-col gap-4">
              {/* Title */}
              <div className="w-full flex flex-row justify-between items-center">
                <p className="text-4xl font-bold">오늘의 인기작</p>
                <div className="flex flex-row gap-2 justify-end text-4xl">
                  <BsArrowLeftSquareFill className="cursor-pointer" />
                  <BsArrowLeftSquareFill className=" cursor-pointer rotate-180" />
                </div>
              </div>
              {/* Novel List */}
              <ul className="w-full flex flex-row gap-2 overflow-hidden">
                {novelList.map((item) => (
                  <li key={item.novelid} className="w-[20%]">
                    <div className="flex flex-col gap-4">
                      <img
                        className="w-full px-2"
                        src="http://image.yes24.com/goods/106211628/XL"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
