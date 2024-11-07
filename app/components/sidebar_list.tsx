import { Link } from "@remix-run/react";
import { RemixLinkProps } from "@remix-run/react/dist/components";

export default function SidebarList({ children, ...props }: RemixLinkProps) {
  return (
    <li>
      <Link
        {...props}
        className="block font-ubuntu py-2 uppercase text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
