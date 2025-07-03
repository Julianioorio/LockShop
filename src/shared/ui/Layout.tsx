import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  bgColor?: string;
}

const Layout = ({ children, bgColor = 'bg-white'}: LayoutProps) => (
  <div className={bgColor}>
    <div className="container mx-auto">{children}</div>
  </div>
);

export default Layout;
