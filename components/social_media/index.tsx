import styled, {withTheme} from "styled-components";
import {
    SectionNarrow,
    FlexCol,
    FlexRow,
    Heading3,
    Text,
    TextItalic,
} from "../../styles";
import {ThemeProps} from '../../types'
import {GrInstagram, GrFacebook, GrTwitter} from 'react-icons/gr'


function SocialMediaComponent({ theme }: ThemeProps) {
    return (
        <SectionNarrow margin="9.7rem auto">
          <FlexCol margin='0 auto'>
            <TextItalic color={theme.primary}>social media</TextItalic>
            <Heading3 color={theme.grey4}>Follow us on Social Media</Heading3>
            <Line />
            <Text color={theme.grey3}>
              Want to know more about new products, our assortiment and contribution in supporting environmental friendly companies? 
              This and a lot more you will find on our profiles on Facebook, Instagram and Twitter.
            </Text>
            <FlexRow margin='2.7rem auto'>
              <Icon href="https://facebook.com" aria-label="Facebook">
                <GrFacebook color='#4267B2'/>
              </Icon>
              <Icon href="https://instagram.com" aria-label="Instagream">
                <GrInstagram color='#fb3958'/>
              </Icon>
              <Icon href="https://twitter.com" aria-label="Twitter">
                <GrTwitter color='skyblue'/>
              </Icon>
            </FlexRow>
          </FlexCol>
        </SectionNarrow>
    );
}

export default withTheme(SocialMediaComponent);

const Line = styled.div`
    width: 10rem;
    height: 1px;
    background-color: ${(p) => (p.color ? p.color : p.theme.primary)};
    margin: 1.4rem auto;
`;
const Icon = styled.a`
  margin: 0 1.4rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  transition: all .3s;

  svg{
    font-size: 3.7rem;
  }

  &:hover{
    transform: scale(1.15);
  }
`