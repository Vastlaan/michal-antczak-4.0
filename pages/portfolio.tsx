import Layout from "../layouts/main";
import Head from "../components/seo";
import Portfolio from "../components/portfolio_page";

export default function PortfolioPage() {
  return (
    <Layout>
      <Head
        title="Portfolio"
        description="Check out some of the apps and example websites I've created."
      />
      <Portfolio />
    </Layout>
  );
}
