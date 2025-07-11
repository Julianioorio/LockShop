import Layout from "@/shared/ui/Layout";
export default function Discount() {
  return (
    <Layout bgColor="bg-[#454F5B]">
      <div className="flex items-center">
        <p className="font-SFD  font-medium  leading-[44px] h-11 w-full text-center align-middle inline">Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</p>
        <a href="#" className="text-white items-end font-SFD font-medium whitespace-nowrap underline max-lg:hidden">
          Обратный звонок
        </a>
      </div>
    </Layout>
  );
}
