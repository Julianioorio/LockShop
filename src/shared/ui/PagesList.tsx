import { useState } from "react";
import { useToggle } from "@/shared/lib/hooks/useToggle";
import overheadLock from "@/shared/assets/img/OverheadL.png";
import Cout from "@/shared/assets/img/Cut-outL.png";
import { Button } from "@/shared/ui/Button";
import Apartment from "@/shared/assets/img/ApartmentL.png";
import Home from "@/shared/assets/img/HomeL.png";
import Hotel from "@/shared/assets/img/HotelL.png";
import Office from "@/shared/assets/img/OfficeL.png";
import Loker from "@/shared/assets/img/LockerL.png";
import Changing from "@/shared/assets/img/changingRL.png";
import { HeaderActions } from "@/shared/ui/HeaderActions";
import Layout from "@/shared/ui/Layout";

export default function PagesList() {
  const lockItems = [
    {
      label: "Накладные электронные замки",
      img: overheadLock,
    },
    {
      label: "Врезные электронные замки",
      img: Cout,
    },
    {
      label: "Замки для квартиры",
      img: Apartment,
    },
    {
      label: "Замки для дома",
      img: Home,
    },
    {
      label: "Замки для отелей",
      img: Hotel,
    },
    {
      label: "Замки для офиса",
      img: Office,
    },
    {
      label: "Замки для шкафчиков",
      img: Loker,
    },
    {
      label: "Замки для раздевалок",
      img: Changing,
    },
  ];
  const { value: isOpen, toggle } = useToggle(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { value: isOpenBurger, toggle: setIsOpenBurger } = useToggle(false);

  return (
    <>
      <nav className="max-lg:hidden">
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
            <div className={`flex absolute p-8 bg-white shadow-md justify-between items-center  w-[790px] ${`${isOpen ? "block" : "hidden"}`}`}>
              <div>
                <ul className="list-none ">
                  <li
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200"
                  >
                    <a href="#">Накладные электронные замки</a>
                  </li>
                  <li
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200"
                  >
                    <a href="#">Врезные электронные замки</a>
                  </li>
                  <li
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200"
                  >
                    <a href="#">Замки для квартиры</a>
                  </li>
                  <li
                    onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200"
                  >
                    <a href="#">Замки для дома</a>
                  </li>
                  <li
                    onMouseEnter={() => setHoveredIndex(4)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200"
                  >
                    <a href="#">Замки для отелей</a>
                  </li>
                  <li
                    onMouseEnter={() => setHoveredIndex(5)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200"
                  >
                    <a href="#">Замки для офиса</a>
                  </li>
                  <li
                    onMouseEnter={() => setHoveredIndex(6)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200"
                  >
                    <a href="#">Замки для шкафчиков</a>
                  </li>
                  <li
                    onMouseEnter={() => setHoveredIndex(7)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200"
                  >
                    <a href="#">Замки для раздевалок</a>
                  </li>
                  <Button>Смотреть всё</Button>
                </ul>
              </div>
              <div className="w-[351px] relative h-[300px]">
                <img
                  src={lockItems[0].img}
                  alt={lockItems[0].label}
                  className={"absolute top-0 left-0 w-full h-auto transition-opacity duration-300 " + (hoveredIndex === null ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none")}
                />
                {lockItems.map((item, idx) => (
                  <img
                    key={item.label}
                    src={item.img}
                    alt={item.label}
                    className={"absolute top-0 left-0 w-full h-full transition-opacity duration-300 " + (hoveredIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none")}
                  />
                ))}
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
      <div className="max-lg:w-[24px] max-lg:h-[24px] lg:hidden max-lg:flex max-lg:flex-col max-lg:justify-around cursor-pointer" onClick={setIsOpenBurger}>
        <span className={`block h-0.5 w-full bg-black rounded transition-all duration-300 ${isOpenBurger ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block h-0.5 w-full bg-black rounded transition-all duration-300 ${isOpenBurger ? "opacity-0" : ""}`}></span>
        <span className={`block h-0.5 w-full bg-black rounded transition-all duration-300 ${isOpenBurger ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </div>
      {isOpenBurger && (
        <div className="fixed top-[116px] left-0 w-screen h-[calc(100vh-116px)] z-50 bg-white bg-opacity-95 flex flex-col">
          <Layout>
            <ul className="flex flex-col gap-6 w-full">
              <li className="font-SFT border-b border-[#EAEAEA] text-black py-4"><a href="#">Главная</a></li>
              <li className="font-SFT border-b border-[#EAEAEA] text-black py-4"><a href="#">Каталог</a></li>
              <li className="font-SFT border-b border-[#EAEAEA] text-black py-4"><a href="#">Оптовая продажа</a></li>
              <li className="font-SFT border-b border-[#EAEAEA] text-black py-4"><a href="#">О нас</a></li>
            </ul>
            <div className="mt-8 flex items-start justify-between w-full">
              <HeaderActions type="phone" />
              <a href="#" className="text-blue-400 font-SFD underline font-semibold">
                Обратный звонок
              </a>
            </div>
          </Layout>
        </div>
      )}
    </>
  );
}
