import { useToggle } from "@/shared/lib/hooks/useToggle";
import overheadLock from "@/shared/assets/img/OverheadL.png";
export default function PagesList() {
  const { value: isOpen, toggle } = useToggle(false);
  return (
    <nav>
      <ul className="list-none flex gap-8">
        <li>
          <a href="#" className="font-SFT font-light text-[#161C24] no-underline">
            Главная
          </a>
        </li>
        <li className={`relative  w-[66px] h-[30px] group ${isOpen ? "open" : ""}`}>
          <button className="font-SFT font-light text-[#161C24] no-underline cursor-pointer" onClick={toggle}>
            Каталог
            <span className="absolute bg-transparent top-[3px] left-10 w-10 h-2.5 block rotate-[35deg] float-right rounded-[2px] after:content-[''] after:bg-black after:w-[6px] after:h-[1px] after:block after:float-right after:rounded-[6px_10px_10px_6px] after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,1.7,0.35,0.8)] after:z--1 group-[.open]:after:rotate-[-70deg] group-[.open]:after:origin-center group-[.open]:after:bg-[#4295E4]"></span>
            <span className="absolute bg-transparent top-[22px] left-[50px] w-[40px] h-[10px] block rotate-[-35deg] float-right rounded-sm after:content-[''] after:bg-black after:w-[6px] after:h-[1px] after:block after:float-right after:rounded-[10px_6px_6px_10px] after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,1.7,0.35,0.8)] after:-z-10 group-[.open]:after:rotate-[70deg] group-[.open]:after:origin-center group-[.open]:after:bg-[#4295E4]"></span>
          </button>
          <div className="flex absolute p-8 bg-white shadow-md justify-between items-center  w-[790px]">
            <div>
              <ul className="list-none ">
                <li className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200">
                  <a href="#">Накладные электронные замки</a>
                </li>
                <li className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200">
                  <a href="#">Врезные электронные замки</a>
                </li>
                <li className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200">
                  <a href="#">Замки для квартиры</a>
                </li>
                <li className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200">
                  <a href="#">Замки для дома</a>
                </li>
                <li className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200">
                  <a href="#">Замки для отелей</a>
                </li>
                <li className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200">
                  <a href="#">Замки для офиса</a>
                </li>
                <li className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200">
                  <a href="#">Замки для шкафчиков</a>
                </li>
                <li className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200">
                  <a href="#">Замки для раздевалок</a>
                </li>
                <a href="#" className="bg-[#4295E4] py-[7px] px-[32px] cursor-pointer no-underline block whitespace-nowrap hover:bg-[#56A9F8] active:bg-[#2E81D0]">
                  Смотреть все
                </a>
              </ul>
            </div>
            <div className="w-[351px] ">
              <img src={overheadLock} alt="OverheadLock" className="w-full h-auto" />
            </div>
          </div>
        </li>
        <li>
          <a href="#" className="font-SFT font-light text-[#161C24] no-underline">
            Оптовая продажа
          </a>
        </li>
        <li>
          <a href="#" className="font-SFT font-light text-[#161C24] no-underline">
            О нас
          </a>
        </li>
      </ul>
    </nav>
  );
}
