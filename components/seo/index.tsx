import Head from "next/head";

interface SeoProps {
  host?: string;
  title?: string;
  description?: string;
  robots?: string;
  logo?: string;
  image?: string;
}

export default function SeoComponent({
  host,
  title,
  description,
  robots,
  logo,
  image,
}: SeoProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title || "Michal Antczak - software engineer"}</title>
      <meta
        name="description"
        content={
          description ||
          "Looking for professional software engineer? You are in the right spot! I design and implement highly performant, secure and accessible web applications and e-commerce websites."
        }
        data-react-helmet="true"
      />
      <link rel="apple-touch-icon" href={logo || "/logo192.png"} />
      <link rel="cannonical" href={host} />
      <meta name="robots" content={robots || "index, follow"} />
      <link rel="manifest" href="/manifest.json" />

      <meta name="application-name" content="Golden Shoe" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content={title || "Golden Shoe Webstore"}
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#ba181b" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#1b1b1b" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || "Golden Shoe Webstore"} />
      <meta
        property="og:description"
        content={
          description ||
          "Discover amazing deals on brand-name shoes, boots, sandals, and sneakers for the whole family."
        }
      />
      <meta
        property="og:image"
        content={
          image || "https://goldenshoe.michalantczak.com/img/header-1.jpg"
        }
      />
      <meta property="og:url" content={host || host} />
      <meta property="og:site_name" content={title || "Golden Shoe Webstore"} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://goldenshoe.michalantczak.com" />
      <meta name="twitter:title" content={title || "Golden Shoe Webstore"} />
      <meta
        name="twitter:description"
        content={
          description ||
          "Discover amazing deals on brand-name shoes, boots, sandals, and sneakers for the whole family."
        }
      />
      <meta
        name="twitter:image"
        content="https://goldenshoe.michalantczak.com/img/header-1.jpg"
      />
      <meta name="twitter:creator" content="" />
    </Head>
  );
}
