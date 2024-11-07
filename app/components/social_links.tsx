import { HTMLProps } from "react";

export default function SocialLinks({
  children,
  ...props
}: HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className="text-white w-8 h-8 lg:w-10 lg:h-10 bg-black bg-opacity-20 hover:bg-opacity-50 flex justify-center items-center text-base lg:text-xl rounded"
    >
      {children}
    </a>
  );
}
