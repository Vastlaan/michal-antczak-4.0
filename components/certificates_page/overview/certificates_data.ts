import { ICertificate } from "../../../types";
import Cert1 from "../../../public/img/cert-1.png";
import Cert2 from "../../../public/img/cert-2.png";
import Cert3 from "../../../public/img/cert-3.png";
import Cert4 from "../../../public/img/cert-4.png";
import Cert9 from "../../../public/img/cert-9.jpg";
import Cert7 from "../../../public/img/cert-7.png";
import Cert8 from "../../../public/img/cert-8.png";
import Cert10 from "../../../public/img/aws-solutions-architect-cert.png";

export const certificates: ICertificate[] = [
  {
    title: "AWS Solutions Architect",
    image: Cert10,
    issuedBy: "Amazon Web Services",
    year: "June, 2025",
  },
  {
    title: "Professional Scrum Master I",
    image: Cert9,
    issuedBy: "Scrum.org",
    year: "December, 2021",
  },

  {
    title: "Object-Oriented Programming with JAVA I",
    image: Cert2,
    issuedBy: "University of Helsinki",
    year: "April, 2018",
  },
  {
    title: "Object-Oriented Programming with JAVA II",
    image: Cert3,
    issuedBy: "University of Helsinki",
    year: "August, 2018",
  },
  {
    title: "The fundamentals of Digital Marketing",
    image: Cert4,
    issuedBy: "Google Digital Garage",
    year: "August, 2020",
  },
  {
    title: "Google Analytics for beginners",
    image: Cert7,
    issuedBy: "Google Analytics Academy",
    year: "September, 2020",
  },
  {
    title: "Google My Business",
    image: Cert8,
    issuedBy: "Google Analytics Academy",
    year: "October, 2020",
  },
  {
    title: "Introduction to Computer Science and Programming",
    image: Cert1,
    issuedBy: "Massechuset Institute of Technology",
    year: "June, 2018",
  },
];
