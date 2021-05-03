import styled from 'styled-components'
import {fonts} from './fonts'
import {FlexibleComponentProps} from '../types'
import { respond } from '.'

export const LinkSmall = styled.a<FlexibleComponentProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${p=>p.color?p.color: p.theme.grey1};
  font-size: 1.4rem;
  font-family: ${fonts.heading};
  letter-spacing: .2rem;
  font-weight: 300;
  margin: ${p=>p.margin?p.margin:'0'};
  transition: all .3s;
  cursor:pointer;

  svg{
    font-size: 1.9rem;
    margin-right: .9rem;
    color: ${p=>p.theme.grey1};
    transition: all .3s;
  }

  &:hover{
    color: ${p=>p.theme.secondary};

    svg{
      color: ${p=>p.theme.secondary};
    }
  }
`
export const LinkExtra = styled.p<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  max-width: ${(p)=>p.wide?'65rem':'45rem'};
  text-align: ${p=>p.align?p.align:'center'};
  cursor: pointer;

  &:hover{
    color: ${p=>p.theme.primary};
  }
`
export const LinkItem = styled.a<FlexibleComponentProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${p=>p.color?p.color: p.theme.grey5};
  font-size: 1.9rem;
  font-family: ${fonts.heading};
  letter-spacing: .2rem;
  font-weight: 500;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.margin?p.margin:'.9rem 1.4rem'};
  transition: all .3s;
  cursor:pointer;

  svg{
    font-size: 1.9rem;
    margin-right: 1.4rem;
    color: ${p=>p.theme.grey1};
    transition: all .3s;
  }
`

export const ButtonEmpty = styled.button<FlexibleComponentProps>`
  min-width: 20rem;
  margin: ${p=>p.margin?p.margin:' 1.4rem 2.7rem'};
  padding: .9rem 1.4rem;
  font-size: 1.9rem;
  text-transform: uppercase;
  font-family: ${fonts.heading};
  letter-spacing: .2rem;
  border: 1px solid ${p=>p.theme.grey1};
  background-color: transparent;
  color: ${p=>p.theme.grey1};
  box-shadow: 0 0 1rem rgba(255,255,255,.3);
  transition: all .3s;

  &:hover{
    box-shadow: 0 0 2rem rgba(255,255,255,.6);
    border: 1px solid ${p=>p.theme.grey5};
    background-color: ${p=>p.theme.secondary};
    color: ${p=>p.theme.grey5};
  }

`
export const ButtonSecondary = styled.button<FlexibleComponentProps>`
  min-width: 16rem;
  margin: ${p=>p.margin?p.margin:' 1.4rem .9rem'};
  padding: .9rem 1.4rem;
  font-size: 1.9rem;
  text-transform: uppercase;
  font-family: ${fonts.heading};
  letter-spacing: .2rem;
  border: 3px solid ${p=>p.theme.grey5};
  background-color: ${p=>p.theme.secondary};
  color: ${p=>p.theme.grey5};
  box-shadow: 0 1rem 1rem rgba(0,0,0,.3);
  transition: all .3s;

  ${(p)=>respond('m',`min-width: 20rem; margin: ${p.margin?p.margin:' 1.4rem 2.7rem'};`)}

  &:hover{
    background-color: ${p=>p.theme.grey5};
    color: ${p=>p.theme.secondary};
  }

`

export const ButtonPrimary = styled.button<FlexibleComponentProps>`
  min-width: 16rem;
  margin: ${p=>p.margin?p.margin:' 1.4rem .9rem'};
  padding: .9rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.9rem;
  text-transform: uppercase;
  font-family: ${fonts.heading};
  letter-spacing: .2rem;
  border: 3px solid ${p=>p.theme.grey5};
  background-color: ${p=>p.theme.primary};
  color: ${p=>p.theme.grey1};
  box-shadow: 0 1rem 1rem rgba(0,0,0,.3);
  transition: all .3s;

  ${(p)=>respond('m',`min-width: 20rem; margin: ${p.margin?p.margin:' 1.4rem 2.7rem'};`)}

  svg{
    margin-right: 1.4rem;
    font-size: 2.7rem;
  }

  &:hover{
    background-color: ${p=>p.theme.grey5};
    color: ${p=>p.theme.secondary};
  }

`