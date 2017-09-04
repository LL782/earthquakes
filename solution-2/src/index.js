/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import QuakesLister from './components/QuakesLister';

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);
ReactDOM.render(<QuakesLister />, mountNode);
