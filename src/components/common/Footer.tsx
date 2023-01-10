const Footer = () => {
  return (
    <footer className="w-full h-full border-t py-4">
      <div className="w-full flex flex-col gap-4 px-16 py-8">
        <ul className="w-full flex flex-row gap-12 text-lg font-bold">
          <li className="cursor-pointer text-footer-contra">이용약관</li>
          <li className="cursor-pointer text-footer-contra">
            개인정보처리방침
          </li>
          <li className="cursor-pointer text-footer-contra">lorem</li>
          <li className="cursor-pointer text-footer-contra">lorem</li>
          <li className="cursor-pointer text-footer-contra">lorem</li>
        </ul>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          atque a numquam autem, delectus ab maxime inventore fuga laboriosam
          necessitatibus itaque suscipit laborum expedita consectetur vel
          tempora labore in eum.
        </div>
        <div>©Ropung Corp. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
