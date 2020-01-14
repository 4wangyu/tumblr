import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import Styled from './styled/Styled';
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

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