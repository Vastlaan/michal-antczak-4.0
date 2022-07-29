import { useContext } from "react";
import { Context } from "../../../store";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { respond } from "../../../styles";

export default function FullScreenCertificate() {
  const { state, dispatch } = useContext(Context);
  return (
    <Container
      onClick={() =>
        dispatch({
          type: "setActiveCertificate",
          payload: { activeCertificate: false },
        })
      }
    >
      <CloseButton
        onClick={() =>
          dispatch({
            type: "setActiveCertificate",
            payload: { activeCertificate: false },
          })
        }
      >
        <IoIosCloseCircleOutline />
      </CloseButton>
      <ImageWrapper>
        <Image
          src={state.activeCertificate as StaticImageData}
          alt="certificate"
        />
      </ImageWrapper>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  background-color: ${(p) => p.theme.greyPrimary};

  svg {
    color: ${(p) => p.theme.primary};
    font-size: 4.7rem;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 90%;

  ${respond("m", "width: 65%;")}
`;
const CloseButton = styled.button`
  position: absolute;
  top: 1.4rem;
  right: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: transparent;
  border: none;
  ${respond("m", "right: 5rem;")}
`;
