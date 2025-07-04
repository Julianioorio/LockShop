import Layout from "@/shared/ui/Layout";

export default function Discount() {
  return (
    <Layout bgColor="bg-[#454F5B]">
      <div className="flex items-center justify-between">
        <p className="font-SFD font-medium h-11 leading-[44px] flex-1 text-center">Скидка 10% по промокоду "ZAMOK" на все заказы до 10.09</p>
        <a href="#" className="text-white font-SFD font-medium whitespace-nowrap underline ml-4">
          Обратный звонок
        </a>
      </div>
    </Layout>
  );
}
