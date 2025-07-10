import LogoIcon from "@/shared/assets/icons/Logo.svg";
type LopoProps = {
  className?: string;
};
export default function Logo({ className }: LopoProps) {
  return <img src={LogoIcon} alt="Logo" className={`${className}`} />;
}
