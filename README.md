# Thumblr

Thumblr, a Tumblr clone, is a social media platform allowing users to post multimedia content to personal blogs. Users can follow other users' blogs and like each others posts.

[Try out Thumblr](https://thumblr-segersalex.herokuapp.com/)

## Technologies

### Backend

* Ruby On Rails
* Amazon S3
* PostgresSQL

### Frontend

* Node
* React (w/ Context API and Hooks)
* Redux
* React Router
* Styled Components

### Multiple Multimedia Types

Choose from a plethora of multimedia types: text, photo, quote, link, audio, and video.
![Post types](https://user-images.githubusercontent.com/32560551/81614397-dbc84700-9394-11ea-8f9a-a3cc31851613.gif)

### Multi-theme

Select your theme palette of choice. The site will default to Dark Mode if it's the users' preffered color scheme.

![Multi-theme](https://user-images.githubusercontent.com/32560551/81610796-ee3f8200-938e-11ea-8cf1-85f57ddefec9.gif)

### Inifinite Scroll and Lazy Loading

Posts loads continuously as the user scrolls down the page, reducing the initial load time and eliminating the need for pagination.

![Infinite Scroll](https://user-images.githubusercontent.com/32560551/81610658-b9cbc600-938e-11ea-879f-4fd32b1d104d.gif)

### Real-time Search
Search for tagged posts and blogs to follow live
....
![Search](https://user-images.githubusercontent.com/32560551/81610803-f13a7280-938e-11ea-96de-332db4fc4e13.gif)


## Technical Challenges

### Demo Login
```javascript
// -- util/ghostTyper.js --
const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms));

const ghostType = (text, cb, duration = 1000) => new Promise((resolve) => {
  let current = 0;
  const len = text.length;
  const speed = duration / len
  const _typeNextLetter = () => {
    let letter = text[current];
    if (current < len) {
      current++;
      setTimeout(() => { cb(letter); _typeNextLetter(); }, speed);
    } else {
      resolve()
    }
  }

  _typeNextLetter();
});

// -- component/pages/AuthPage/AuthStepSilder.jsx --
import { sleep, ghostType } from 'util/ghostTyper';

// ...
const startGhostLogin = () => {
    if (isTyping) return;
    setIsTyping(true);
    setUserFields({});
    ghostType('demo@example.com', letter => {
      setUserFields(({ email = '', ...prev }) => ({ ...prev, email: email + letter }))
    }, 1500)
      .then(() => sleep(500))
      .then(() => $nextBtn.current.click())
      .then(() => sleep(1000))

      .then(() => {
        return ghostType('Password4321!', letter => {
          setUserFields(({ password = '', ...prev }) => ({ ...prev, password: password + letter }))
        }, 1000)
      })
      .then(() => sleep(400))
      .then(() => { setIsTyping(false); $loginBtn.current.click(); });
  };
```

### Theming system
```javascript
// -- styled/StyleProvider.jsx --
import React, { createContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { themeBase, palettes } from './theme';
export const PaletteToggleContext = createContext();

const paletteNames = Object.keys(palettes);

const StyleProvider = ({ children }) => {

  const [{ palette }, setThemeState] = useState({ palette: 'True Blue' });

  const toggle = () => {
    const idx = (paletteNames.indexOf(palette) + 1) % paletteNames.length;
    const newPalette = paletteNames[idx];
    window.localStorage.setItem('theme-palette', newPalette)
    setThemeState({ palette: newPalette });
  };

  const theme = useMemo(
    () => ({
      ...themeBase,
      colors: {
        ...themeBase.colors,
        ...palettes[palette]
      }
    }),
    [palette]
  )

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme-palette');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localTheme && paletteNames.includes(palette)) {
      setThemeState({ palette: localTheme });
    } else if (prefersDarkMode) {
      setThemeState({ palette: 'Dark Mode' });
    }
  }, []);

  return (
    <PaletteToggleContext.Provider value={{ toggle, palette }}>
      <ThemeProvider
        theme={theme}
      >
        <>
          {children}
          <GlobalStyle />
        </>
      </ThemeProvider>
    </PaletteToggleContext.Provider>
  );
};

export default StyleProvider;
```

### Creating reusable post and form component
```javascript
// -- components/PostForm
import React, { useState, useEffect, useCallback, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { riseFall } from 'motions';
import { selectCurrentUser, selectPostById } from 'store/selectors';
import { Thunks as Posts } from 'store/posts/actions';
import { Card, CardContent } from 'styled/base/Card.styled';
import { FormHeader, FormFooter } from './PostForm.styled';
import { Btn } from 'components/atoms/Btn/Btn.styled';
import { ImageGallery, Video, Audio, Link, Quote, Text } from './PostFormFields';
import TagManager from './TagManager';
import pojoToFormData from 'util/pojo_to_form_data';
import Loader from 'components/atoms/Loader';
import FormError from './FormError';

export const FormContext = createContext();

const PostForm = ({ postType, postId = null, onClose: closeModal }) => {
  const { currentUser, post } = useSelector(state => ({
    currentUser: selectCurrentUser(state),
    post: selectPostById(state, { postId })
  }));

  const dispatch = useDispatch();
  const createPost = formFields => dispatch(Posts.createPost(formFields));
  const updatePost = (postId, formFields) => dispatch(Posts.updatePost(postId, formFields));
  const [formFields, setFormFields] = useState(post || {});
  const [errors, setErrors] = useState({})
  const [isLoading, setLoading] = useState(false)
  // const [required, setRequired] = useState({})

  useEffect(() => {
    if (post) setFormFields(prev => ({ ...post, ...prev }));
  }, [post])

  useEffect(() => {
    setErrors({})
  }, [formFields])

  const getFields = () => ({
    ImageGallery: <ImageGallery />,
    Video: <Video />,
    Audio: <Audio />,
    Link: <Link />,
    Quote: <Quote />,
    Text: <Text />,
    Chat: <Chat />
  });

  const handleTextInput = useCallback(e => {
    const { name, value } = e.target;
    setFormFields(prev => ({ ...prev, [name]: value }));
  }, [formFields]);

  const processFormData = () => {
    setLoading(true)
    const newPost = pojoToFormData(formFields);
    (formFields.id ? updatePost(formFields.id, newPost) : createPost(newPost))
      .then(() => closeModal())
      .fail(({ responseText: errorJSON }) => setErrors(JSON.parse(errorJSON)))
      .always(() => setLoading(false));
  };

  const contextValue = { formFields, ...formFields, setFormFields, handleTextInput };

  return (
    <Card
      as={motion.div}
      variants={riseFall.variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={riseFall.transitions}
    >
      <FormHeader>
        <span>{currentUser.username}</span>
        <Loader isLoading={isLoading} size='small' />
      </FormHeader>
      <FormError errors={errors} />
      <CardContent noPadding>
        <FormContext.Provider value={contextValue}>
          {getFields()[postType]}
          <TagManager />
        </FormContext.Provider>
      </CardContent>
      <FormFooter>
        <Btn type='secondary' onClick={closeModal}>Close</Btn>
        <Btn onClick={processFormData}>Post</Btn>
      </FormFooter>
    </Card>
  );
};

export default PostForm;
```
