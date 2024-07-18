import { DefaultTheme } from 'styled-components';

const color = {
  blue: '#3952FF',
  white: '#FFFFFF',
};

export type ColorTypes = typeof color;

export const theme: DefaultTheme = {
  color,
};
