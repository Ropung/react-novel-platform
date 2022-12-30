import { useState } from "react";
import BottomNavViewer from "./nav/BottomNavViewer";
import TopNavViewer from "./nav/TopNavViewer";

const NovelViewPage = () => {
  const [onNavi, setNavi] = useState<boolean>(true);

  return (
    <>
      {onNavi && (
        <>
          <TopNavViewer />
          <BottomNavViewer />
        </>
      )}
      <section
        className={`w-screen h-full min-h-screen flex justify-center items-center bg-main bg-opacity-30 py-[5rem] overflow-y-scroll`}
        onClick={() => {
          setNavi(!onNavi);
        }}
      >
        <div className="w-[80vw] h-full flex flex-col gap-8 pb-20">
          <h1 className="text-lg font-bold py-8">{`제목`}</h1>
          <p>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.`}</p>
          <p>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.`}</p>
          <p>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.`}</p>
          <p>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.`}</p>
          <p>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.`}</p>
          <p>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.`}</p>
          <p>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.`}</p>
          <p>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus quasi atque dignissimos fugiat ipsam odit. Sit, accusamus! Sapiente, corrupti provident nisi unde aspernatur quia quaerat repellendus magni dignissimos vero.`}</p>
        </div>
      </section>
    </>
  );
};

export default NovelViewPage;
