import styled from 'styled-components'
import respond from './respond'
import {FlexibleComponentProps} from '../types'

// SECTIONS AND HEADERS

export const SectionNarrow = styled.section<FlexibleComponentProps>`
  max-width: 996px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  padding: 1.4rem;

  ${()=>respond('xxl', 'max-width:1225px')};
`
export const ContainerNarrow = styled.div<FlexibleComponentProps>`
  max-width: 996px;
  margin: 0 2.7rem;
  padding: 1.4rem;

  ${(p)=>respond('s',`margin:${p.margin?p.margin:'0 auto'}`)}

  ${()=>respond('xxl', `max-width:1225px;`)};
`
export const Section = styled.section<FlexibleComponentProps>`
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  background-color: ${(p)=>p.theme.grey1};
  padding: 1.4rem;
`
export const FlexRow = styled.div<FlexibleComponentProps>`
  display:flex;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'center'};
  align-items: ${p=>p.align?p.align:'center'};
  background-color: ${p=>p.background?p.background:'transparent'};
  max-width: ${p=>p.wide?p.wide: 'auto'};
  flex-wrap: ${p=>p.wrap?p.wrap:'no-wrap'};
`
export const FlexCol = styled.div<FlexibleComponentProps>`
  display:flex;
  flex-direction: column;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'center'};
  align-items: ${p=>p.align?p.align:'center'};
  background-color: ${p=>p.background?p.background:'transparent'};
`

export const ProductsConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${()=>respond('m', 'flex-direction: row; flex-wrap: wrap;')}
`
