import styled from 'styled-components'
import {FlexibleComponentProps} from '../types'

export const Line = styled.div<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  width: ${p=>p.wide?p.wide:'100%'};
  height: 2px;
  background-color: ${p=>p.color?p.color:p.theme.primary};
  transition: all .3s;

`