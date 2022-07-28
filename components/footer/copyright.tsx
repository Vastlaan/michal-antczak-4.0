import styled, { withTheme } from "styled-components";
import { respond, TextLong } from "../../styles";

function Copyright({ theme }) {
  return (
    <Container>
      <TextLong
        size="1.4rem"
        wide="55rem"
        color={theme.grey}
      >{`@ ${new Date().getFullYear()} Michal Antczak. All rights reserved.`}</TextLong>
    </Container>
  );
}
export default withTheme(Copyright);

const Container = styled.div`
  display: flex;
  grid-column: 1/-1;
  grid-row: 10/11;
  width: 100%;
  aling-items: center;
  margin-top: 2.7rem;
  padding: 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  ${respond("m", "grid-row: 4/5;")}
`;
