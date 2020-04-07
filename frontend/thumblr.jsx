import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store/index';
import Root from 'components/Root';
import Styled from 'styled/StyleProvider';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = undefined;

  if (window.currentUser) {
    preloadedState = {
      users: {
        entities: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    delete window.currentUser;

    document.querySelector('#set-current-user').outerHTML = "";
  }

  const store = configureStore(preloadedState);

  ReactDOM.render(<Styled><Root store={store} /></Styled>, document.querySelector('#root'));
})