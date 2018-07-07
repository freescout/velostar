
import React from 'react';
import { render } from 'react-dom';
import VelostarTable from './App2';
//import MUITable from './MUITable';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<VelostarTable />, rootElement);
}
// const muiTable = document.querySelector('#muitable');
// if (muiTable) {
//   render(<MUITable />, muiTable);
// }
