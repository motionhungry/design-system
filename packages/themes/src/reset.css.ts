import { globalStyle } from '@vanilla-extract/css';
import vars from '@veer-ui/system/contract.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontSize: vars.font.size,
});
