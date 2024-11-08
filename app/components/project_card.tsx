import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { cloudinary } from "~/utils/cloudinary";

export default function ProjectCard({
  title,
  imgName,
  description,
  link,
}: {
  title: string;
  imgName: string;
  description: string;
  link: string;
}) {
  const img = cloudinary
    .image(imgName)
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(720).height(405));

  return (
    <div className="relative group bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-950 rounded overflow-hidden">
      <div className="aspect-video bg-gray-500">
        <AdvancedImage cldImg={img} />
      </div>
      <div className="p-5">
        <h4 className="font-bold font-montserrat text-lg lg:text-xl text-slate-800 group-hover:text-yellow-700 dark:text-white dark:group-hover:text-yellow-400 line-clamp-2">
          {title}
        </h4>
        <p className="mt-2 line-clamp-3">{description}</p>
      </div>
      <a
        href={link}
        title={title}
        target="_blank"
        className="absolute top-0 left-0 w-full h-full opacity-0"
      >
        {title}
      </a>
    </div>
  );
}
