import styled from 'styled-components'
import {fonts} from './fonts'
import {FlexibleComponentProps} from '../types'
import { respond } from '.'

// Headings

export const Heading1 = styled.h1<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-family: ${fonts.heading};
  font-size: 6.7rem;
  text-transform: uppercase;
  text-shadow: 0 .3rem .5rem rgba(0,0,0,.3);
  letter-spacing: .5rem;
  color: ${(p)=>p.color?p.color:p.theme.grey1};
  text-align: ${p=>p.align?p.align:'center'};

  ${()=>respond('m','font-size: 8.7rem;')}
`
export const Heading2 = styled.h2<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-family: ${fonts.heading};
  font-size: ${(p)=>p.size?p.size:'2.7rem'};
  text-align: ${p=>p.align?p.align: 'left'};
  text-transform: uppercase;
  letter-spacing: .4rem;
  color: ${(p)=>p.color?p.color:p.theme.primary};
  text-align: ${p=>p.align?p.align:'center'};

  span{
    color: ${p=>p.theme.secondary};
  }
`
export const Heading3 = styled.h3<FlexibleComponentProps>`
margin: ${p=>p.margin?p.margin:'0'};
  font-family: ${fonts.heading};
  font-size: ${(p)=>p.size?p.size:'2.2rem'};
  text-transform: capitalize;
  letter-spacing: .2rem;
  color: ${(p)=>p.color?p.color:p.theme.primary};
  text-align: ${p=>p.align?p.align:'center'};

  span{
    color: ${p=>p.theme.secondary};
  }
`
export const Heading4 = styled.h2<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-family: ${fonts.heading};
  font-size: 2.7rem;
  text-shadow: 0 .3rem .5rem rgba(0,0,0,.3);
  letter-spacing: .2rem;
  color: ${(p)=>p.color?p.color:p.theme.grey1};
  text-align: ${p=>p.align?p.align:'center'};

  span{
    color: ${p=>p.theme.secondary};
  }
`


// Paragraphs

export const Text = styled.p<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  max-width: ${(p)=>p.wide?'65rem':'45rem'};
  text-align: ${p=>p.align?p.align:'center'};
`
export const TextSmall = styled.p<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  max-width: ${(p)=>p.wide?'65rem':'45rem'};
  text-align: ${p=>p.align?p.align:'center'};
`

export const TextBold = styled.p<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: ${p=>p.size?p.size:"2.2rem"};
  font-family: ${fonts.heading};
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  max-width: ${(p)=>p.wide?'65rem':'45rem'};
  text-align: ${p=>p.align?p.align:'center'};
  font-weight: 600;
`
export const TextItalic = styled.p<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.4rem;
  font-style: italic;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  max-width: ${(p)=>p.wide?'65rem':'45rem'};
  text-align: ${p=>p.align?p.align:'center'};
`

// Other

export const Logo = styled.h1<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 2.7rem;
  color:${p=>p.color?p.color:p.theme.grey4};
  cursor: pointer;
  span{
    color:${p=>p.theme.grey5};
  }
`
export const Anchor = styled.a<FlexibleComponentProps>`
  position: relative;
  text-decoration: none;
  margin: .6rem 0;
  font-size: 1.9rem;
  color: ${(p)=>p.color?p.color:p.theme.grey1};
  max-width: ${(p)=>p.wide?'65rem':'45rem'};
  text-align: ${p=>p.align?p.align:'center'};
  cursor: pointer;
  transition: all .3s;

  ${()=>respond('m','margin: .3rem 0;')}

  &::before{
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: transparent;
      transition: all .3s;
    }

  &:hover{
    
    color: ${(p)=>p.color?p.color:p.theme.grey2};

    &::before{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: rgba(255,255,255,.3);
    }
  }
`