/* eslint-disable prettier/prettier */
import React from "react";
import ProjectsIntrodution from "../components/pages/projects/page-introduction";
import ProjectsList from "../components/pages/projects/projects-list";
import { fetchHygraphQuery } from "../lib/fetch-hygraph-query";
import { ProjectsPageData } from "../types/page-info";

export const metadata = {
  title: "Projetos",
};

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `;

  return fetchHygraphQuery(query, 60 * 60 * 24);
};
const Projects = async () => {
  const { projects } = await getPageData();
  return (
    <>
      <ProjectsIntrodution />
      <ProjectsList projects={projects} />
    </>
  );
};

export default Projects;
