import { useContext, forwardRef, ForwardedRef } from "react";
import styled, { withTheme, ThemeProps } from "styled-components";
import Image from "next/image";
import { ICertificate } from "../../../types";
import { Context } from "../../../store";
import { Heading3, Text, SpanBlue, Line } from "../../../styles";

function CertificateComponent({
  title,
  issuedBy,
  year,
  url,
  image,
  theme,
}: ICertificate & ThemeProps<any>) {
  const { state, dispatch } = useContext(Context);

  return (
    <Certificate
      role="button"
      aria-label="view certificate full screen"
      onClick={() => {
        dispatch({
          type: "setActiveCertificate",
          payload: { activeCertificate: image },
        });
      }}
    >
      <ImageWrapper>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </ImageWrapper>

      <Heading3 margin="0 0 1.4rem 0">{title}</Heading3>
      <Line color={theme.primary} margin="0 0 auto 0" />
      <Text color={theme.greySecondary} margin="1.4rem 0">
        <SpanBlue>
          <strong>Issued by:</strong>
        </SpanBlue>{" "}
        {issuedBy}
      </Text>
      <Line color={theme.primary} />

      <Text color={theme.greySecondary} margin="1.4rem 0 0 0">
        <SpanBlue>
          <strong>Date:</strong>
        </SpanBlue>{" "}
        {year}
      </Text>
    </Certificate>
  );
}
export default withTheme(CertificateComponent);

const Certificate = styled.div`
  margin: 1.4rem;
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  padding: 1.4rem;
  border: 2px solid ${(p) => p.theme.primary};
  transition: all 0.3s;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #333;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 5rem;
    height: 5rem;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    background-color: ${(p) => p.theme.primary};
  }
`;
const ImageWrapper = styled.div`
  width: 31.8rem;
  height: 25rem;
  margin: 0 0 1.4rem 0;
  position: relative;
  overflow: hidden;
`;
