import React, { createContext, useState, useRef, useMemo, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { Thunks as Session } from 'store/session/actions';
import { AnimatePresence, motion } from 'framer-motion';
import useSlider from 'hooks/useSlider';
import useFormValidation from 'hooks/useFormValidation';
import { sleep, ghostType } from 'util/ghostTyper';
import { AuthStepSliderContainer, StepForm } from './AuthStepSlider.styled';
import { LoginSteps, SignupSteps } from '../AuthSteps';
import { slider } from 'motions'

export const AuthFormContext = createContext();

const AuthStepSlider = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const atSignup = useMemo(() => pathname === '/signup', [pathname])

  const authSteps = atSignup ? SignupSteps : LoginSteps;

  const initialValues = { email: '', password: '', ...(atSignup && { username: '' }) };

  const onSubmit = formUser => {
    return (
      (pathname === '/signup')
        ? dispatch(Session.signup(formUser))
        : dispatch(Session.login(formUser))
    ).then(() => history.push('/dashboard'));
  };

  const {
    decrement: slideLeft, increment: slideRight,
    direction, step, stepIndex, lock: lockSlider, unlock: unlockSlider, isLocked: isSliderLocked
  } = useSlider({ length: authSteps.length });


  const {
    handleBlur, handleChange, handleSubmit,
    values: userFields, setValues: setUserFields, errors, isSubmitting,
  } = useFormValidation({ initialValues, onSubmit, atSignup })


  const [isTyping, setIsTyping] = useState(false);
  const $nextBtn = useRef();
  const $enterPassBtn = useRef();
  const $loginBtn = useRef();
  const startGhostLogin = () => {
    if (isTyping) { return };
    setIsTyping(true);
    setUserFields({});
    ghostType('demo@example.com', letter => {
      setUserFields(({ email = '', ...prev }) => ({ ...prev, email: email + letter }))
    }, 1500)
      .then(() => sleep(500))
      .then(() => $nextBtn.current.click())
      .then(() => sleep(1000))
      .then(() => $enterPassBtn.current.click())
      .then(() => sleep(1000))
      .then(() => {
        return ghostType('Password4321!', letter => {
          setUserFields(({ password = '', ...prev }) => ({ ...prev, password: password + letter }))
        }, 1000)
      })
      .then(() => sleep(400))
      .then(() => { setIsTyping(false); $loginBtn.current.click(); });
  };

  const formContextValues = {
    handleBlur, handleChange, handleSubmit,
    userFields, setUserFields, errors, isSubmitting,
    slideLeft, slideRight,
    $nextBtn, $enterPassBtn, $loginBtn, startGhostLogin,
    lockSlider, unlockSlider, isSliderLocked
  };

  const preventDefault = e => e.preventDefault();

  return (
    <AuthStepSliderContainer>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={slider.variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slider.transitions}
        >
          <StepForm onSubmit={preventDefault}>
            <AuthFormContext.Provider value={formContextValues}>
              {React.createElement(authSteps[stepIndex])}
            </AuthFormContext.Provider>
          </StepForm>
        </motion.div>
      </AnimatePresence>
    </AuthStepSliderContainer>
  )
}

export default AuthStepSlider;
