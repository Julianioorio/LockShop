import { useState } from "react";
import { useToggle } from "@/shared/lib/hooks/useToggle";
import overheadLock from "@/shared/assets/img/OverheadLG.png";
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
  const [lastHoveredIndex, setLastHoveredIndex] = useState<number | null>(null);
  const { value: isOpenBurger, toggle: setIsOpenBurger } = useToggle(false);
  const [currentSlide, setCurrentSlide] = useState(0); // 0 - меню, 1 - каталог

  const activeIndex = hoveredIndex ?? lastHoveredIndex ?? 0;

  const handleMouseEnter = (idx: number) => {
    setHoveredIndex(idx);
    setLastHoveredIndex(idx);
  };
  const handleMouseLeave = () => setHoveredIndex(null);

  const handleCatalogClick = () => {
    setCurrentSlide(1);
  };

  const handleBackClick = () => {
    setCurrentSlide(0);
  };

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
                  {lockItems.map((item, idx) => (
                    <li
                      key={item.label}
                      onMouseEnter={() => handleMouseEnter(idx)}
                      onMouseLeave={handleMouseLeave}
                      className="mb-4 font-SFT text-[#454F5B] hover:text-[#161C24] border-b border-transparent hover:border-b-[#4295E4] transition-colors duration-200"
                    >
                      <a href="#">{item.label}</a>
                    </li>
                  ))}
                  <Button>Смотреть всё</Button>
                </ul>
              </div>
              <div className="w-[351px] relative h-[300px]">
                <img
                  src={lockItems[activeIndex].img}
                  alt={lockItems[activeIndex].label}
                  className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 z-10"
                />
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
        <>
          {/* Первый слайд - меню (остается на своем месте) */}
          <div
            className={`fixed top-[135px] left-0 w-screen h-[calc(100vh-116px)] z-50 bg-white bg-opacity-95 flex flex-col transition-transform duration-500 ease-in-out ${
              currentSlide === 0 ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Layout>
              <ul className="flex flex-col gap-6 w-full">
                <li className="font-SFT border-b border-[#EAEAEA] text-black py-4">
                  <a href="#">Главная</a>
                </li>
                <li className="font-SFT border-b border-[#EAEAEA] text-black py-4">
                  <a href="#" className="flex justify-between" onClick={handleCatalogClick}>
                    <p>Каталог</p>
                    <span className="inline-block w-2 h-2 border-r-2 border-b-2 border-black rotate-[-45deg] cursor-pointer"></span>
                  </a>
                </li>
                <li className="font-SFT border-b border-[#EAEAEA] text-black py-4">
                  <a href="#">Оптовая продажа</a>
                </li>
                <li className="font-SFT border-b border-[#EAEAEA] text-black py-4">
                  <a href="#">О нас</a>
                </li>
              </ul>
              <div className="mt-8 flex items-start justify-between w-full">
                <HeaderActions type="phone" />
                <a href="#" className="text-blue-400 font-SFD underline font-semibold max-smT:text-[13px]">
                  Обратный звонок
                </a>
              </div>
            </Layout>
          </div>

          {/* Второй слайд - каталог (начинается с верха, заканчивается на Discount) */}
          <div className={`fixed top-[44px] left-0 w-screen h-screen z-50 bg-white transition-transform duration-500 ease-in-out ${currentSlide === 1 ? "translate-x-0" : "translate-x-full"}`}>
            {/* Header для второго слайда - на месте бургера */}
            <div className="bg-white border-b border-[#EAEAEA] px-4 py-3 flex items-center justify-between">
              <button onClick={handleBackClick} className="relative h-10 flex items-center justify-center">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 inline-block w-3 h-3 border-l-2 border-b-2 border-black rotate-[45deg]"></span>
              </button>
              <h2 className="font-SFT text-lg font-medium text-black">Каталог</h2>
              <div className="w-6"></div>
            </div>

            {/* Контент каталога с прокруткой */}
            <div className="h-[calc(100%-60px)] overflow-y-auto px-5">
              <div className="flex flex-col gap-6">
                {Array.from({ length: Math.ceil(lockItems.length / 2) }, (_, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center mt-6">
                    {lockItems.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
                      <div key={index} className={`text-left min-w-[121px] max-w-[300px]${index === 0 ? " mr-[20px]" : ""}`}>
                        <img src={item.img} alt={item.label} className="w-[100%] object-cover mb-3" />
                        <h3 className="font-SFT text-black font-medium leading-tight">{item.label}</h3>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Кнопка "Смотреть всё" внизу */}
              <div className="mt-8 pb-6 flex justify-center">
                <div className="w-fit">
                  <Button className="w-full">Смотреть всё</Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
