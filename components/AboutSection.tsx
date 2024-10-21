"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-6">
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Flask</li>
          <li>TensorFlow</li>
          <li>PyTorch</li>
          <li>CI/CD</li>
          <li>Firebase</li>
          <li>Generative AI</li>
        </ul>
        <ul className="list-disc pl-6">
          <li>Machine Learning</li>
          <li>Data Visualization (Plotly, Power BI, Tableau)</li>
          <li>Data Analysis (Pandas, NumPy)</li>
          <li>Statistical Analysis (SPSS)</li>
          <li>Microsoft Azure Cloud Platform</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelor of Computer Science(Data Science), University of Malaya (UM)
        </li>
        <li>
          Diploma of Civil Engineering, University of Technology Malaysia (UTM)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Azure AI Fundamentals (AZ-900)</li>
        <li>Microsoft Azure Data Fundamentals (AI-900)</li>
        <li>
          Microsoft Security, Compliance, and Identity Fundamentals (SC-900)
        </li>
        <li>Microsoft Power BI Data Analyst Associate (PL-300)</li>
        <li>Microsoft Azure AI Engineer Associate (AI-102)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-me.jpg"
          alt="about-me"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:texxt-lg text-justify">
            I am a passionate Data Scientist and Analyst specializing in
            building applications with Large Language Models (LLMs) and
            LangChain. With a strong foundation in Python and SQL, I leverage
            cutting-edge technologies to extract insights from complex datasets
            and enhance data visualization. My expertise includes deploying
            machine learning algorithms and employing Generative AI techniques
            to create impactful solutions. I thrive in collaborative
            environments, where I can apply my skills in cloud platforms like
            Microsoft Azure and Amazon Web Service.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
