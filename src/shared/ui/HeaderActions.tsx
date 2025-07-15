import TelIcon from '@/shared/assets/icons/Tel.svg';
import Love from '@/shared/assets/icons/Love.svg';
import Shop from '@/shared/assets/icons/Shop.svg';
type HeaderActionsProps = {
  type?: "phone" | "icons";
};
export function HeaderActions({ type }: HeaderActionsProps) {
  return (
    <div className="flex items-center">
      {(type === "phone" || !type) && (
        <>
          <img src={TelIcon} alt="Tel" className="mr-2" />
          <a href="tel: +79665588499" className="font-SFD text-black max-smT:text-[12px]">
            +7 (966) 55 88 499
          </a>
        </>
      )}
      {(type === "icons" || !type) && (
        <>
          <a href="#" className="ml-[35px]">
            <img src={Love} alt="Love" />
          </a>
          <a href="#" className="ml-6">
            <img src={Shop} alt="" />
          </a>
        </>
      )}
    </div>
  );
}
