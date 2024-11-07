import { IconType } from "react-icons";

export type SkillCardProps = {
  icon: IconType;
  title: string;
  subtitle: string;
};

export default function SkillCard({
  icon: Icon,
  title,
  subtitle,
}: SkillCardProps) {
  return (
    <div className="flex justify-start items-center bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-950 rounded p-5 space-x-3">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 flex-shrink-0 flex justify-center items-center text-3xl text-blue-400 rounded-full">
        <Icon />
      </div>
      <div className="flex-1">
        <h4 className="font-ubuntu font-semibold text-gray-800 dark:text-white">
          {title}
        </h4>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
