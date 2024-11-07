import { Link } from "@remix-run/react";
import moment from "~/utils/moment";

export type BlogPostCardProps = {
  publishedAt: string | Date;
  title: string;
  tag: string;
  description: string;
  imageURL: string;
  slug: string;
};

export default function BlogPostCard({
  publishedAt,
  imageURL,
  title,
  tag,
  description,
  slug,
}: BlogPostCardProps) {
  return (
    <div className="relative group bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-950 rounded overflow-hidden">
      <div className="aspect-video bg-gray-500">
        <img
          src={imageURL}
          className="w-full h-full object-cover"
          alt={title}
        />
      </div>
      <div className="p-5 pb-2 flex justify-start items-center space-x-3 text-sm uppercase">
        <span className="font-medium font-ubuntu text-cyan-800 dark:text-blue-400">
          {moment(publishedAt).format("DD MMM YYYY")}
        </span>{" "}
        <span>&mdash;</span>
        <span className="font-ubuntu">{tag}</span>
      </div>
      <h4 className="mx-5 mb-3 line-clamp-2 font-bold font-montserrat text-slate-800 group-hover:text-yellow-700 dark:text-white dark:group-hover:text-yellow-400">
        {title}
      </h4>
      <div className="px-5 pb-8">
        <p className="line-clamp-3">{description}</p>
      </div>
      <Link
        to={`/blog/${slug}`}
        title={title}
        className="opacity-0 absolute top-0 left-0 w-full h-full"
      >
        {title}
      </Link>
    </div>
  );
}
