import { useRef, createRef } from "react";
import styled from "styled-components";
import { respond } from "../../../styles";
import { FlexibleComponentProps, ICertificate } from "../../../types";
import Certificate from "./certificate";
import { certificates } from "./certificates_data";
import useAnimation from "../../../hooks/useAnimation";

export default function Main() {
  const refObject = useRef([]);
  for (let i = 0; i < certificates.length; i++) {
    refObject.current.push(createRef());
  }
  useAnimation({ type: "bulkShowUp", refObject });
  return (
    <Container>
      {certificates.map((certificate: ICertificate, i) => (
        <Certificate
          ref={refObject.current[i]}
          key={certificate.title}
          {...certificate}
        />
      ))}
    </Container>
  );
}

const Container = styled.div<FlexibleComponentProps>`
  padding: 1.4rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${respond("m", "flex-direction: row; flex-wrap: wrap;")}
`;
