/* eslint-disable prettier/prettier */
import Hero from "./components/pages/home/hero-section";
import HighlightedProjects from "./components/pages/home/highlighted-projects";
import KnowTechs from "./components/pages/home/know-techs";

export default async function Home() {
  return (
    <>
      <Hero />
      <KnowTechs />
      <HighlightedProjects />
    </>
  );
}
