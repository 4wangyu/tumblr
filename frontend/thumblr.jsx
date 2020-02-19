import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store/index';
import Root from 'components/Root';
import Styled from 'styled/Styled';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');

  let preloadedState = undefined;

  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    delete window.currentUser;
  }

  const store = configureStore(preloadedState);

  ReactDOM.render(<Styled><Root store={store} /></Styled>, root)
})