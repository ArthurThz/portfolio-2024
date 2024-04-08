/* eslint-disable prettier/prettier */
import Hero from "./components/pages/home/hero-section";
import HighlightedProjects from "./components/pages/home/highlighted-projects";
import KnowTechs from "./components/pages/home/know-techs";
import WorkExperience from "./components/pages/home/work-experience";
import { fetchHygraphQuery } from "./lib/fetch-hygraph-query";
import { HomePageData } from "./types/page-info";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query MyQuery {
    pages(where: {slug: "home"}) {
      introduction {
        raw
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        iconSvg
        url
      }
    highlightProjects {
      slug
      technologies {
        name
      }
      thumbnail {
        url
      }
      shortDescription
      title
    }
  }
  workExperiences {
    companyLogo {
      url
    }
    role
    companyName
    companyUrl
    startDate
    endDate
    description {
      raw
    }
    technologies {
      name
    }
  }

  }
  
`;

  return fetchHygraphQuery(query);
};

export default async function Home() {
  const { pages: pageData, workExperiences } = await getPageData();

  return (
    <>
      <Hero homeInfo={pageData} />
      <KnowTechs techs={pageData[0].knownTechs} />
      <HighlightedProjects projects={pageData[0].highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  );
}
