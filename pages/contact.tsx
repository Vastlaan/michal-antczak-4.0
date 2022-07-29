import Layout from "../layouts/main";
import Head from "../components/seo";
import Contact from "../components/contact_page";

export default function ContactPage() {
  return (
    <Layout>
      <Head
        title="Contact - Michal Antczak"
        description="Reach out to me directly or connect via social media."
      />
      <Contact />
    </Layout>
  );
}
