import { HTMLProps, forwardRef } from "react";
import { IconType } from "react-icons";

const TextField = forwardRef<
  HTMLInputElement,
  { icon: IconType } & HTMLProps<HTMLInputElement>
>(({ icon: Icon, className, ...props }, ref) => (
  <div
    className={`flex justify-start items-stretch bg-gray-200 dark:bg-slate-700 overflow-hidden rounded group ${className}`}
  >
    <div className="bg-gray-300 dark:bg-slate-600 text-xl p-4 group-focus-within:bg-yellow-500 group-focus-within:text-gray-800">
      <Icon />
    </div>
    <input
      {...props}
      ref={ref}
      className="flex-1 outline-none bg-transparent px-3"
    />
  </div>
));

export default TextField;
