import { DefaultTheme } from 'styled-components';

const color = {
  blue: '#3952FF',
  white: '#FFFFFF',
  gray: '#454545',
};

export type ColorTypes = typeof color;

export const theme: DefaultTheme = {
  color,
};
