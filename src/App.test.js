import { render, screen } from '@testing-library/react';
import MainJSApp from './App';
import ReactDOM from 'react-dom';
import React from 'react';


it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<MainJSApp />, div);
   ReactDOM.unmountComponentAtNode(div);
});