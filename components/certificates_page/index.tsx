import Header from "./header";
import Overview from "./overview";
import ScrumMaster from "./scrum_master";
import SolutionsArchitect from "./solution_architect";

export default function CertificatesPage() {
  return (
    <>
      <Header />
      <SolutionsArchitect />
      <ScrumMaster />
      <Overview />
    </>
  );
}
