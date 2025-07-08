import React from "react";
type ButtonProps = {
  px?: string;
  py?: string;
  href?: string;
  className?: string;
};

export function Button({ px = "px-[32px]", py = "py-[7px]", href = "#", children }: React.PropsWithChildren<ButtonProps>) {
  return (
    <a href={href} className={`bg-[#4295E4] ${py} ${px} cursor-pointer no-underline whitespace-nowrap hover:bg-[#56A9F8] active:bg-[#2E81D0]`}>
      {children}
    </a>
  );
}
