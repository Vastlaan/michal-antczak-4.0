import Link from 'next/link'
import styled from 'styled-components'
import {respond, fonts, SectionNarrow, FlexCol, Anchor, Text, TextBold} from '../../styles'

export default function FooterComponent() {
  return (
    <Footer>
      <SectionNarrow>
        <Logo><span>Golden</span> Shoe</Logo>
        <Grid>
          <FlexCol align='flex-start' justify='flex-start'>
            <TextBold color='white'>Contact us:</TextBold>
            <br/>
            <Text align='left' color='#EFF0EF'>301 Dover St, London W1S 4NB, UK</Text>
            <br/>
            <Text align='left' color='#EFF0EF'>info@goldenshoe.com</Text>
            <Text align='left' color='#EFF0EF'>+44 20 7619 3951</Text>
            <br/>
            <Text align='left' color='#EFF0EF'>Opening times (GMT)</Text>
            <Text align='left' color='#EFF0EF'>Mon - Sun: 8 AM - 9 PM</Text>
          </FlexCol>

          <FlexCol align='flex-start' justify='flex-start'>
            <TextBold color='white'>Shopping:</TextBold>
            <br/>
            <Link href='/contact'>          
              <Anchor  margin="0 1.9rem 0 0">Men's collection</Anchor>
            </Link>
            <Link href='/contact'>          
              <Anchor  margin="0 1.9rem 0 0">Women's collection</Anchor>
            </Link>
            <Link href='/contact'>          
              <Anchor  margin="0 1.9rem 0 0">Kids collection</Anchor>
            </Link>
            <Link href='/contact'>          
              <Anchor  margin="0 1.9rem 0 0">New collection</Anchor>
            </Link>
            <Link href='/contact'>          
              <Anchor  margin="0 1.9rem 0 0">Bestsellers</Anchor>
            </Link>
            <br/>
          </FlexCol>

          <FlexCol align='flex-start' justify='flex-start'>
            <TextBold color='white'>Information:</TextBold>
            <br/>
            <Link href='/contact'>          
              <Anchor  margin="0 1.9rem 0 0">How to order</Anchor>
            </Link>
            <Link href='/contact'>          
              <Anchor  margin="0 1.9rem 0 0">Payment methods</Anchor>
            </Link>
            <Link href='/contact'>          
              <Anchor  margin="0 1.9rem 0 0">Delivery Information</Anchor>
            </Link>
            <Link href='/contact'>          
              <Anchor  margin="0 1.9rem 0 0">Complaints</Anchor>
            </Link>
            <Link href='/contact'>          
              <Anchor  margin="0 1.9rem 0 0">Returns</Anchor>
            </Link>
            <Link href='/contact'>          
              <Anchor  margin="0 1.9rem 0 0">Terms and Conditions</Anchor>
            </Link>
            <Link href='/contact'>          
              <Anchor  margin="0 1.9rem 0 0">Privacy policy</Anchor>
            </Link>
            <br/>
          </FlexCol>
        </Grid>
      </SectionNarrow>

      <Copyright>
        <p>
          &copy; {new Date().getFullYear()} Copyright{" "}
          Golen Shoe. All rights reserved.
          Designed by <a href="https://michalantczak.com">Michal Antczak</a>
        </p>
      </Copyright>
      
    </Footer>
  )
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 4.7rem 0 0 0;
  background-color: ${p=>p.theme.grey5};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4.7rem;
  

  ${()=>respond('m', 'grid-template-columns: 45rem 1fr 1fr;')}
`

const Logo = styled.h2`
  margin-bottom: 2.7rem;
  font-size: 2.7rem;
  color:${p=>p.theme.grey1};
  span{
    color:${p=>p.theme.secondary};
  }
`
const Copyright = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding:.9rem;
    border-top: 1px solid rgba(255,255,255,.3);
    p {
        font-size: 1.2rem;
        line-height: 1;
        letter-spacing: 0.2rem;
        font-weight: 300;
        font-family: ${fonts.heading};
        color: ${(p) => p.theme.white};
        text-align: center;
        a {
            padding: .6rem .9rem;
            background-color: ${p=>p.theme.primary};
            color: ${p=>p.theme.white};
            display: inline-block;
            transition: all .3s;
            box-shadow: 0 .3rem .5rem rgba(0,0,0,.3);
            &:hover{
                transform: rotate(4deg) scale(1.05);
            }
        }
    }
`;
