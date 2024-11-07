import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { cloudinary } from "~/utils/cloudinary";

export default function ProjectCard({
  title,
  imgName,
  description,
}: {
  title: string;
  imgName: string;
  description: string;
}) {
  const img = cloudinary
    .image(imgName)
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(720).height(405));

  return (
    <div className="group bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-950 rounded overflow-hidden">
      <div className="aspect-video bg-gray-500">
        <AdvancedImage cldImg={img} />
      </div>
      <h4 className="p-5 pb-2 font-bold font-montserrat text-lg lg:text-xl text-slate-800 group-hover:text-yellow-700 dark:text-white dark:group-hover:text-yellow-400">
        {title}
      </h4>
      <p className="px-5 pb-5">{description}</p>
    </div>
  );
}
