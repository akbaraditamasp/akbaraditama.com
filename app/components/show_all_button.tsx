import { Link, LinkProps } from "@remix-run/react";
import { ComponentProps, ElementType, HTMLProps } from "react";

type ExtractComponentProps<T> = T extends "button"
  ? HTMLProps<HTMLButtonElement>
  : T extends typeof Link
  ? LinkProps
  : never;

export default function ShowAllButton<T extends typeof Link | "button">({
  element: Element = "button" as T,
  ...props
}: { element?: T } & ExtractComponentProps<T>) {
  return (
    <Element
      {...(props as any)}
      className="bg-gray-800 dark:bg-gray-300 rounded py-3 px-6 uppercase font-ubuntu tracking-widest text-sm text-white dark:text-slate-700 shadow-md shadow-gray-400 dark:shadow-gray-700"
    >
      Lihat Semua
    </Element>
  );
}
