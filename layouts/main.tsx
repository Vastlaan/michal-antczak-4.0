import { PropsWithChildren } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import CookiesStatement from "../components/modals/cookie_statement";

export default function MainLayoutComponent({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation />
      <CookiesStatement />
      {children}
      <Footer />
    </>
  );
}
