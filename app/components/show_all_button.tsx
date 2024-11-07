import { HTMLProps } from "react";

export default function ShowAllButton(props: HTMLProps<HTMLButtonElement>) {
  return (
    <button
      {...props}
      type="button"
      className="bg-gray-800 dark:bg-gray-300 rounded py-3 px-6 uppercase font-ubuntu tracking-widest text-sm text-white dark:text-slate-700 shadow-md shadow-gray-400 dark:shadow-gray-700"
    >
      Lihat Semua
    </button>
  );
}
