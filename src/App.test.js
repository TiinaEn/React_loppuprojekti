import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, Simulate, wait} from 'react-testing-library'
import 'dom-testing-library/extend-expect'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
