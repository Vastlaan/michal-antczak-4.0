import Layout from "../layouts/main";
import Head from "../components/seo";
import Skills from "../components/skills_page";

export default function SkillsPage() {
  return (
    <Layout>
      <Head
        title="Skills - tech stack"
        description="Deep dive in the whole range of technologies I know and match them with your requirements."
      />
      <Skills />
    </Layout>
  );
}
