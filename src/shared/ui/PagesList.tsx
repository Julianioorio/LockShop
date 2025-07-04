export default function PagesList() {
  return (
    <nav>
      <ul className="list-none flex gap-8">
        <li>
          <a href="#" className="font-SFT font-light text-[#161C24] no-underline">
            Главная
          </a>
        </li>
        <li className="relative cursor-pointer  w-[66px] h-[30px] group open">
          <a href="#" className="font-SFT font-light text-[#161C24] no-underline">
            Каталог
            <span className="absolute bg-transparent top-[3px] left-10 w-10 h-2.5 block rotate-[35deg] float-right rounded-[2px] after:content-[''] after:bg-black after:w-[6px] after:h-[1px] after:block after:float-right after:rounded-[6px_10px_10px_6px] after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,1.7,0.35,0.8)] after:z--1 group-[.open]:after:rotate-[-70deg] group-[.open]:after:origin-center group-[.open]:after:bg-[#4295E4]"></span>
            <span className="absolute bg-transparent top-[22px] left-[50px] w-[40px] h-[10px] block rotate-[-35deg] float-right rounded-sm after:content-[''] after:bg-black after:w-[6px] after:h-[1px] after:block after:float-right after:rounded-[10px_6px_6px_10px] after:transition-all after:duration-500 after:ease-[cubic-bezier(0.25,1.7,0.35,0.8)] after:-z-10 group-[.open]:after:rotate-[70deg] group-[.open]:after:origin-center group-[.open]:after:bg-[#4295E4]"></span>
          </a>
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
