"use client";

import { projectsData } from "@/app/data/projectsData"; // Assuming you have this data file
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import automatedResumeScreening from "../automated-resume-screening";
import genAIVendorAnalysis from "../genAI-vendor-analysis";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import limitOfAuthority from "../limit-of-authority";
import financeAndTaxAssistant from "../finance-and-tax";
import legalComparisonAssistant from "../legal-comparison";
import visualVibe from "../visual-vibe";
import Image from "next/image";

const projectContent = [
  {
    id: 1,
    content: automatedResumeScreening,
  },
  {
    id: 2,
    content: genAIVendorAnalysis,
  },
  {
    id: 3,
    content: limitOfAuthority,
  },
  {
    id: 4,
    content: financeAndTaxAssistant,
  },
  {
    id: 5,
    content: legalComparisonAssistant
  }, 
  {
    id: 6,
    content: visualVibe,
  }
];

const ProjectDetails = ({ params }: { params: Params }) => {
  const { id } = params;

  // Find the project with the matching ID
  const project = projectsData.find((project) => project.id === Number(id));
  const projectDetails = projectContent.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return <div>Project not found</div>; 
  }

  return (
    <div>
      <div className="flex items-center mt-4 ml-4">
        <Link
          href="/"
          className="flex items-center justify-center h-12 group rounded-full transition-all duration-300"
          aria-label="Back"
        >
          <ChevronLeftIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white transition-all duration-300" />
          <span className="ml-2 text-lg font-semibold text-gray-300 transition-all duration-300 group-hover:text-white">
            Back
          </span>
        </Link>
      </div>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover rounded-md mb-4 w-full h-64"
          sizes="100vw"            // Responsive image sizes
          width={0}                // Allow dynamic width with style
          height={0}             // Set desired height in pixels (e.g., 150px)
        />
        <div className="text-lg text-gray-300 mb-4 text-justify">
          {projectDetails && projectDetails.content && projectDetails.content()}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
