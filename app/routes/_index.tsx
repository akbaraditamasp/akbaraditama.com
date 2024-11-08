import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { MdCall } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import BlogPostCard from "~/components/blog_post_card";
import { PageInfo } from "~/components/layout";
import ProjectCard from "~/components/project_card";
import ShowAllButton from "~/components/show_all_button";
import SkillCard from "~/components/skill_card";
import SocialLinks from "~/components/social_links";
import projects from "~/data/projects";
import { skills } from "~/data/skills";
import { socials } from "~/data/socials";
import { wisp } from "~/utils/wisp";

export const meta: MetaFunction = () => {
  return [{ title: "Akbar Aditama" }];
};

export const loader = async () => {
  const blogs = await wisp.getPosts({ limit: 3 });

  return {
    blogs,
    pageInfo: {
      pageTitle: "Beranda",
    } as PageInfo,
  };
};

export default function Index() {
  const [showAllSkill, setShowAllSkill] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { blogs } = useLoaderData<Awaited<ReturnType<typeof loader>>>();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="bg-slate-600 rounded-lg relative overflow-hidden -mx-2 mb-16">
        <div className="hero-bg"></div>
        <img
          src="https://arter-react.vercel.app/img/face-2.png"
          className="w-auto h-[90%] bottom-0 right-10 absolute hidden lg:block"
        />
        <div className="relative px-8 py-16 lg:py-24 lg:px-20 h-96 lg:h-auto flex lg:block flex-col justify-center items-center">
          <h1 className="font-black text-2xl lg:text-5xl font-montserrat text-white mb-3 leading-snug lg:leading-[58px] w-full lg:w-2/3 text-center lg:text-left">
            Jelajahi Dokumentasi Kreatif Saya
          </h1>
          <h2 className="flex-1 text-base lg:text-xl text-white font-roboto-mono mb-0 lg:mb-12 text-center lg:text-left">
            <>
              &lt;<span className="text-yellow-400">code</span>&gt;
            </>{" "}
            {mounted ? (
              <TypeAnimation
                sequence={[
                  "saya seorang front-end developer",
                  2000,
                  "saya seorang back-end developer",
                  2000,
                  "saya seorang mobile developer",
                  2000,
                  "saya seorang devops engineer",
                  2000,
                  "saya seorang ui/ux designer",
                  2000,
                  "saya seorang full-stack developer",
                  2000,
                ]}
                wrapper="span"
                speed={1}
                repeat={Infinity}
              />
            ) : (
              <span>saya seorang full-stack developer</span>
            )}
            <>
              &lt;&#47;
              <span className="text-yellow-400">code</span>
              &gt;
            </>
          </h2>
          <div className="flex flex-col lg:flex-row justify-start items-center space-x-0 space-y-5 lg:space-y-0 lg:space-x-8">
            <Link
              to="/contact"
              title="Hubungi Saya"
              className="py-3 px-5 lg:py-4 lg:px-8 bg-yellow-500 rounded uppercase tracking-widest text-sm font-medium font-ubuntu text-gray-800 flex justify-center items-center transform translate-y-0 hover:-translate-y-1 transition"
            >
              <MdCall className="mr-3 text-base" />
              Hubungi Saya
            </Link>
            <div className="flex justify-start items-center space-x-2">
              {socials.map(({ icon: Icon, ...item }, index) => (
                <SocialLinks
                  key={`${index}`}
                  href={item.link}
                  title={item.name}
                  target="_blank"
                >
                  <Icon />
                </SocialLinks>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="head-decor">Apa saja yang saya kuasai?</h3>
        <p className="mt-0 lg:mt-1 text-base lg:text-lg">
          Ini adalah beberapa tech stack favorit saya
        </p>
        <div
          className={`mt-8 ${
            !showAllSkill ? "max-h-72" : "max-h-[9000px]"
          } overflow-hidden relative transition-all duration-1000`}
        >
          {!showAllSkill ? (
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-gray-200 dark:to-gray-900 flex justify-center items-end pb-5">
              <ShowAllButton
                type="button"
                onClick={() => setShowAllSkill(true)}
              />
            </div>
          ) : null}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-3">
            {skills.map((item, index) => (
              <SkillCard {...item} key={`${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h3 className="head-decor mt-16 lg:mt-24">Project Terbaru</h3>
        <p className="mt-0 lg:mt-1 text-base lg:text-lg">
          Beberapa project terbaru yang saya kerjakan
        </p>
        <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
          {Object.keys(projects)
            .slice(0, 3)
            .map((item, index) => {
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
        <div className="p-5 flex justify-center">
          <ShowAllButton element={Link} to="/project" />
        </div>
      </div>
      <div>
        <h3 className="head-decor mt-16">Postingan Blog Terbaru</h3>
        <p className="mt-0 lg:mt-1 text-base lg:text-lg">
          Selain ngoding, saya juga suka nulis sesekali.
        </p>
        <div className="grid grid-flow-row grod-cols-1 lg:grid-cols-3 gap-5 mt-8">
          {blogs.posts.map((item, index) => (
            <BlogPostCard
              title={item.title}
              imageURL={item.image!}
              description={item.description!}
              publishedAt={item.publishedAt!}
              tag={item.tags[0]!.name}
              key={`${index}`}
              slug={item.slug}
            />
          ))}
        </div>
        {blogs.pagination.totalPages > 1 && (
          <div className="p-5 flex justify-center">
            <ShowAllButton />
          </div>
        )}
      </div>
    </>
  );
}
