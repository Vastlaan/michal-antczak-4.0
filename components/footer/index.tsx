import styled from "styled-components";
import { respond } from "../../styles";
import Name from "./name";
import Contact from "./contact";
import Question from "./question";
import {
  Home,
  Skills,
  Portfolio,
  Contact as ContactButton,
  Certificates,
} from "./buttons";
import Info from "./info";
import Copyright from "./copyright";

export default function FooterComponent() {
  return (
    <Footer>
      <Layout>
        <Name />
        <Contact />
        <Question />
        <Home />
        <Skills />
        <Portfolio />
        <ContactButton />
        <Certificates />
        <Info />
        <Copyright />
      </Layout>
    </Footer>
  );
}

const Footer = styled.footer`
  padding: 1.4rem 1.4rem 0 1.4rem;
  background-color: ${(p) => p.theme.greyPrimary};
  border-top: 1px solid rgba(255, 255, 255, 0.3);

  ${respond("m", "padding: 4.7rem 4.7rem 0 4.7rem;")}
`;

const Layout = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-template-columns: 1fr;

  ${respond("m", "grid-template-columns: repeat(3, 1fr);")}

  & > * {
    padding: 1.4rem;
  }
`;

{
  /* <footer class='footer'>

<div class="footer__layout">

  <div class="footer__name">
    <div class="footer__name--logo">
      <img id="image-logo-2" alt="logo" width='37' height='37'>
      <h1><span class='red'>M</span>ichal <span class='blue'>A</span>ntczak</h1>
    </div>
    <p class="para-1">Web Designer & Developer</p>
  </div>

  <div class="footer__contact">
    <a class='para-1 grey' href="mailto:info@michalantczak.com"><i class="zmdi zmdi-email"></i>info@michalantczak.com</a>
    <a class='para-1 grey' href="tel:0031682307051"><i class="zmdi zmdi-phone"></i>(+31) (0) 6 82 30 70 51</a>
  </div>

  <div class="footer__info-1">
    <p class="para-small blue">Do you want to work with me? I am available from Monday to Saturday between 9:00 and 17:00, or send me an e-mail
    whenever you want.</p>
  </div>

  <div class="footer__info-2">
    <p class="para-small red">Dive into my website, visit my social media profiles, get to know me better. Contact me and make an appointment
    for an introductory meeting.</p>
  </div>

  <div class="footer__btn footer__btn--home">
    <button class='btn-home'>
      <i class="zmdi zmdi-home blue"></i>
      Homepage
    </button>
  </div>

  <div class="footer__btn footer__btn--skills">
    <button class='btn-skills'>
      <i class="zmdi zmdi-code red"></i>
      Skills
    </button>
  </div>
  <div class="footer__btn footer__btn--portfolio">
    <button class='btn-portfolio'>
      <i class="zmdi zmdi-collection-case-play green"></i>
      Portfolio
    </button>
  </div>
  <div class="footer__btn footer__btn--contact">
    <button class='btn-contact'>
      <i class="zmdi zmdi-headset-mic red"></i>
      Contact
    </button>
  </div>
  <div class="footer__btn footer__btn--certificats">
    <button class='btn-certificaten'>
      <i class="zmdi zmdi-graduation-cap green"></i>
      Certificats
    </button>
  </div>

  <!-- footer decorations -->
  <div class="footer-deco-1"></div>
  <div class="footer-deco-2"></div>
  <div class="footer-deco-3"></div>
  <div class="footer-deco-4"></div>

</div>

<div class="footer__copyright">
  <p class='footer__copyright--text para-small'></p>
  <ul>
    <li><a href="https://github.io/vastlaan">Github</a></li>
    <li><a href="https://linkedin.com/michal-antczak">LinkedIn</a></li>
    <li><a href="https://www.facebook.com/webdesignstudiopurmerend">Facebook</a></li>
    <li><a href="./cookies.html">Cookies Policy</a></li>
  </ul>
</div>

</footer> */
}
