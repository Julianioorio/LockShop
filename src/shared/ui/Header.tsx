import Layout from "@/shared/ui/Layout";
import Logo from "@/shared/ui/Logo";
import PagesList from "@/shared/ui/PagesList";
import { HeaderActions } from "@/shared/ui/HeaderActions";

export function Header() {
  return (
    <Layout>
      <div className="flex justify-between py-5">
        <div className="flex justify-between items-center gap-[102px]">
          <Logo className="max-lg:hidden"></Logo>
          <PagesList></PagesList>
        </div>
        <HeaderActions />
      </div>
    </Layout>
  );
}
