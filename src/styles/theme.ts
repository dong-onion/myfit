import { DefaultTheme } from 'styled-components';

const color = {
  primary: [
    '#4865FF',
    '#5C76FF',
    '#798EFF',
    '#9CABFF',
    '#B8C3FF',
    '#E0E4FF',
    '#FCFCFF',
  ],
  white: ['#FFFFFF'],
  gray: ['#454545', '#909090', '#B2B2B2', '#D3D3D3', '#E4E4E4', '#F2F2F2'],
  general: [
    '#131523',
    '#333752',
    '#5A607F',
    '#7E84A3',
    '#A1A7C4',
    '#D7DBEC',
    '#E6E9F4',
  ],
  state: ['#2F80EC', '#27AE61', '#E2B93B', '#EB5757'],
  bg: ['#F5F6FA', '#ECF0FF'],
};

export type ColorTypes = typeof color;

export const theme: DefaultTheme = {
  color,
};
