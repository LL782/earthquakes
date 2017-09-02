/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import QuakeLister from './components/QuakeLister.jsx';

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);
ReactDOM.render(<QuakeLister />, mountNode);
