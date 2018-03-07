/**
 * @Author: qinzhenxing
 * @Date:   2018-03-06T15:55:38+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-03-07T16:20:47+08:00
 */

import { cube } from './math.js';
import _ from 'lodash';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  return element;
}

console.log(
  _.join(['123', 'asd', '4444!'], ' ')
);

document.body.appendChild(component());
