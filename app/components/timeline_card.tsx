import { VscTriangleRight } from "react-icons/vsc";

export type TimelineCardProps = {
  start: string;
  end?: string;
  title: string;
  subtitle: string;
};

export default function TimelineCard({
  start,
  end,
  title,
  subtitle,
}: TimelineCardProps) {
  return (
    <div className="relative bg-white dark:bg-slate-800 rounded p-5 lg:p-8">
      <span className="inline-block bg-cyan-800 py-1 px-3 rounded-full font-semibold text-xs mb-4 -ml-1 text-white">
        {start} &mdash; {end || "sekarang"}
      </span>
      <h2 className="font-ubuntu font-semibold text-gray-800 dark:text-white text-base lg:text-lg">
        {title}
      </h2>
      <p className="text-sm lg:text-base">{subtitle}</p>
      <VscTriangleRight className="text-3xl absolute top-1 -right-5 text-white dark:text-slate-800" />
      <span className="w-5 h-5 rounded-full border-4 border-yellow-500 block absolute top-2 -right-12 bg-white dark:bg-slate-900" />
    </div>
  );
}
