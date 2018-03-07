/**
 * @Author: qinzhenxing
 * @Date:   2018-03-06T15:55:38+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-03-07T15:03:10+08:00
 */

import { cube } from './math.js';

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  return element;
}

document.body.appendChild(component());
