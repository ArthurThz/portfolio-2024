/* eslint-disable prettier/prettier */
import ProjectDetails from "@/app/components/pages/projects/project-detail";
import ProjectSections from "@/app/components/pages/projects/project-sections";
import { fetchHygraphQuery } from "@/app/lib/fetch-hygraph-query";
import { ProjectPageData, ProjectsPageStaticData } from "@/app/types/page-info";
import { Metadata } from "next";
import React from "react";

type ProjectProps = {
  params: {
    slug: string;
  };
};
const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `;

  return fetchHygraphQuery(query, 60 * 60 * 24);
};

const Project = async ({ params: { slug } }: ProjectProps) => {
  const { project } = await getProjectDetails(slug);

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
};

export default Project;

export async function generateStaticParams() {
  const query = `
    query ProjectSlugsQuery(){
      projects(first: 100){
        slug
      }
    }
  `;

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query);
  return projects;
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug);
  const project = data.project;
  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
