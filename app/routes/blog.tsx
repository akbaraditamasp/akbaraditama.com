import { MetaFunction, useLoaderData } from "@remix-run/react";
import BlogPostCard from "~/components/blog_post_card";
import { PageInfo } from "~/components/layout";
import { wisp } from "~/utils/wisp";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }];
};

export const loader = async () => {
  const blogs = await wisp.getPosts({ limit: 50 });

  return {
    blogs,
    pageInfo: {
      pageTitle: "Blog",
    } as PageInfo,
  };
};

export default function Blog() {
  const { blogs } = useLoaderData<Awaited<ReturnType<typeof loader>>>();
  return (
    <div className="relative">
      <h1 className="head-decor !font-black">Blog Saya</h1>
      <p className="mt-0 lg:mt-1 text-base lg:text-lg">
        Selain ngoding, saya juga sesekali suka menulis disini
      </p>
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
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
    </div>
  );
}
