import Layout from "../layouts/main";
import Head from "../components/seo";
import Certificates from "../components/certificates_page";

export default function CertificatesPage() {
  return (
    <Layout>
      <Head
        title="Certificates and achievements"
        description="Keeping up to date with the newest technologies is crucial in the software engineering industry. Check my certificates and proves of achievements here."
      />
      <Certificates />
    </Layout>
  );
}
