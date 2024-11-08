import { MetaFunction } from "@remix-run/react";
import { PageInfo } from "~/components/layout";
import ProjectCard from "~/components/project_card";
import projects from "~/data/projects";

export const meta: MetaFunction = () => {
  return [{ title: "Project" }];
};

export const loader = async () => {
  return {
    pageInfo: {
      pageTitle: "Project",
    } as PageInfo,
  };
};

export default function Project() {
  return (
    <div className="relative">
      <h1 className="head-decor !font-black">Project Saya</h1>
      <p className="mt-0 lg:mt-1 text-base lg:text-lg">
        Berikut adalah beberapa project open-source yang pernah saya kerjakan
      </p>
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
        {Object.keys(projects).map((item, index) => {
          const project = projects[item as keyof typeof projects];
          return (
            <ProjectCard
              link={project.link}
              title={project.title}
              description={project.description}
              imgName={project.imgs[0]}
              key={`${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}
