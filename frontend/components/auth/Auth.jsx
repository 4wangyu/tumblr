import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Thunks as Session } from 'store/session/actions';
import { useLocation, useHistory } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { sleep, ghostType } from 'util/ghost_bot';
import { Link } from 'react-router-dom';
import { AuthForm, Logo, SubHeading, StepsBox, StepContainer } from './Auth.styled';
import { SignupStep1, SignupStep2 } from './SignupSteps';
import { LoginStep1, LoginStep2, LoginStep3 } from './LoginSteps';

const Auth = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const processForm = formUser => {
    return (pathname === '/signup') ? dispatch(Session.signup(formUser)) : dispatch(Session.login(formUser));

  };

  const _initialUserData = { email: '', password: '', username: '' };
  const [userData, setUserData] = useState(_initialUserData);

  const handleInput = e => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    processForm(userData)
      .then(() => history.push("/dashboard"));
  };

  const { pathname } = useLocation();

  const Steps = pathname === '/signup' ? [SignupStep1, SignupStep2] : [LoginStep1, LoginStep2, LoginStep3];

  const [[page, direction], setPage] = useState([0, 0]);

  let pageIndex = wrap(0, Steps.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  const toggleBack = () => paginate(-1)

  const toggleNext = () => paginate(1)

  const motionVariants = {
    enter: direction => {
      return {
        x: direction > 0 ? '50vw' : '-50vw',
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: direction => {
      return {
        zIndex: 0,
        x: direction < 0 ? '50vw' : '-50vw',
        opacity: 0
      };
    }
  };


  const motionTransitions = {
    delay: .1,
    duration: .2,
    type: 'tween',
    ease: 'easeInOut'
  };

  const [isTyping, setIsTyping] = useState(false);
  const $nextBtn = useRef(null);
  const $enterPassBtn = useRef(null);
  const $loginBtn = useRef(null);


  const startDemoBot = () => {
    if (isTyping) { return };

    setIsTyping(true);
    setUserData(_initialUserData);
    ghostType('demo@bot.com', letter => {
      setUserData(prev => Object.assign({}, prev, { email: prev.email + letter }))
    }, 1500)
      .then(() => sleep(500))
      .then(() => $nextBtn.current.click())
      .then(() => sleep(1000))
      .then(() => $enterPassBtn.current.click())
      .then(() => sleep(1000))
      .then(() => {
        return ghostType('password', letter => {
          setUserData(prev => Object.assign({}, prev, { password: prev.password + letter }))
        }, 1000)
      })
      .then(() => sleep(400))
      .then(() => { setIsTyping(false); $loginBtn.current.click(); });
  };


  const { email, password, username } = userData;
  const childProps = {
    handleInput, handleSubmit,
    Link,
    email, password, username,
    $nextBtn, $enterPassBtn, $loginBtn,
    toggleNext, toggleBack,
    startDemoBot
  };
  return (
    <AuthForm>
      <Logo large>thumblr</Logo>
      <SubHeading>
        <span>Come for what you love.</span>
        <span>Stay for what you discover.</span>
      </SubHeading>
      <StepsBox>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={motionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={motionTransitions}
            {...childProps}
          >
            <StepContainer>
              {React.createElement(Steps[pageIndex], childProps)}
            </StepContainer>
          </motion.div>
        </AnimatePresence>
      </StepsBox>
    </AuthForm>
  );
};

export default Auth;