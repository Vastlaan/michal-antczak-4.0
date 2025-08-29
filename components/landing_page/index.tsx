import Header from "./header";
import Skills from "./skills";
import Portfolio from "./portfolio";
import Companies from "./companies";
import Slider from "./slider";
import SolutionsArchitect from "./solution_architect";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Skills />
      <SolutionsArchitect />
      <Portfolio />
      <Companies />
      <Slider />
    </>
  );
}
