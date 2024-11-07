import { MetaFunction } from "@remix-run/react";
import { PageInfo } from "~/components/layout";
import TimelineCard from "~/components/timeline_card";
import { educations } from "~/data/educations";
import { works } from "~/data/works";

export const meta: MetaFunction = () => {
  return [{ title: "Histori" }];
};

export const loader = async () => {
  return {
    pageInfo: {
      pageTitle: "Histori",
    } as PageInfo,
  };
};

export default function History() {
  return (
    <div className="relative block lg:flex justify-start items-stretch space-x-0 space-y-12 lg:space-y-0 lg:space-x-12 pr-5 lg:pr-0">
      <div className="flex-1">
        <h1 className="head-decor !font-black !text-xl">Riwayat Pendidikan</h1>
        <div className="relative flex flex-col space-y-5 lg:space-y-8 mt-2 pr-10">
          <div className="absolute top-6 right-0 bottom-0 w-1 bg-gray-400 dark:bg-slate-800 rounded-full"></div>
          {educations.map((item, index) => (
            <TimelineCard {...item} key={`${index}`} />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h1 className="head-decor !font-black !text-xl">Riwayat Pekerjaan</h1>
        <div className="relative flex flex-col space-y-5 lg:space-y-8 mt-2 pr-10">
          <div className="absolute top-6 right-0 bottom-0 w-1 bg-gray-400 dark:bg-slate-800 rounded-full"></div>
          {works.map((item, index) => (
            <TimelineCard {...item} key={`${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
