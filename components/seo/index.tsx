import Head from "next/head";
import { useContext, useEffect } from "react";
import { Context } from "../../store";

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
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    const isAgreed = JSON.parse(
      window.localStorage.getItem("michalantczak_cookie_policy")
    );
    if (isAgreed?.cookies_accepted && !state.isAnalyticsAgreed) {
      dispatch({
        type: "setAnalyticsAgreed",
        payload: { isAnalyticsAgreed: true },
      });
    }
  }, [state.isAnalyticsAgreed]);
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title || "Michal Antczak - software engineer"}</title>
      {state.isAnalyticsAgreed && (
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-132849357-2"
        />
      )}
      {state.isAnalyticsAgreed && (
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                    function gtag() { 
                      dataLayer.push(arguments); 
                    } 
                    gtag('js', new Date()); 
                    gtag('config', 'UA-132849357-2', {page_path: window.location.pathname,});`,
          }}
        />
      )}
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

      <meta name="application-name" content="Michal Antczak" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content={title || "Michal Antczak"}
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#ba181b" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#1b1b1b" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || "Michal Antczak"} />
      <meta
        property="og:description"
        content={
          description ||
          "Looking for professional software engineer? You are in the right spot! I design and implement highly performant, secure and accessible web applications and e-commerce websites."
        }
      />
      <meta
        property="og:image"
        content={image || "https://michalantczak.com/img/og_image.jpg"}
      />
      <meta property="og:url" content={host || host} />
      <meta property="og:site_name" content={title || "Michal Antczak"} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://michalantczak.com" />
      <meta name="twitter:title" content={title || "Michal Antczak"} />
      <meta
        name="twitter:description"
        content={
          description ||
          "Looking for professional software engineer? You are in the right spot! I design and implement highly performant, secure and accessible web applications and e-commerce websites."
        }
      />
      <meta
        name="twitter:image"
        content="https://michalantczak.com/img/og_image.jpg"
      />
      <meta name="twitter:creator" content="" />
    </Head>
  );
}
