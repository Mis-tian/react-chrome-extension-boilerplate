import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './todoapp.css';
import { Store } from 'react-chrome-redux';

chrome.storage.local.get('state', obj => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');
  const store = new Store({
    portName: 'exampleApp', // communication port name
    state: initialState,
  });
  ReactDOM.render(
    <Root store={store} />,
    document.querySelector('#root')
  );
});


