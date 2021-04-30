import styled from 'styled-components'
import {fonts} from './fonts'
import {ThemeProps, FlexibleComponentProps} from '../types'

export const Heading1 = styled.h1<FlexibleComponentProps>`
margin: ${p=>p.margin?p.margin:'0'};
  font-family: ${fonts.heading};
  font-size: 8.7rem;
  text-transform: uppercase;
  text-shadow: 0 .3rem .5rem rgba(0,0,0,.3);
  letter-spacing: .5rem;
  color: ${(p)=>p.color?p.color:p.theme.grey1};
`
export const Heading2 = styled.h2<FlexibleComponentProps>`
margin: ${p=>p.margin?p.margin:'0'};
  font-family: ${fonts.heading};
  font-size: ${(p)=>p.size?p.size:'2.7rem'};
  text-align: ${p=>p.align?p.align: 'left'};
  text-transform: uppercase;
  letter-spacing: .4rem;
  color: ${(p)=>p.color?p.color:p.theme.primary};

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

  span{
    color: ${p=>p.theme.secondary};
  }
`
export const Heading4 = styled.h4<FlexibleComponentProps>`
margin: ${p=>p.margin?p.margin:'0'};
  font-family: ${fonts.heading};
  font-size: 2.7rem;
  text-shadow: 0 .3rem .5rem rgba(0,0,0,.3);
  letter-spacing: .2rem;
  color: ${(p)=>p.color?p.color:p.theme.grey1};

  span{
    color: ${p=>p.theme.secondary};
  }
`

export const Text = styled.p<FlexibleComponentProps>`
margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.9rem;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  max-width: ${(p)=>p.wide?'65rem':'45rem'};
  text-align: ${p=>p.align?p.align:'center'};
`