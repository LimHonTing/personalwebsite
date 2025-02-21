import React from "react";
// import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  id: number;
  // previewUrl: string
}

const ProjectCard = ({ imgUrl, title, description, id }: ProjectCardProps) => {
  return (
    <div>
      <Link href={`/project/${id}`} passHref className="block relative group">
        <div
          className="h-52 md:h-72 rounded-t-xl"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            {/* <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" /> */}
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Click to see full description</span>
          </div>
        </div>
      </Link>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
