import React, { createContext, useState, useRef, useMemo, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { Thunks as Session } from 'store/session/actions';
import { AnimatePresence, motion } from 'framer-motion';
import Schema from 'form-schema-validation';
import useSlider from 'hooks/useSlider';
import useFormValidation from 'hooks/useFormValidation';
import { sleep, ghostType } from 'util/ghostTyper';
import { StepSlider, StepContainer } from './Auth.styled';
import SignupSteps from './SignupSteps';
import LoginSteps from './LoginSteps';
import { slider } from './motions'

const errorMessages = {
  validateRequired(key) { return `A ${key} is required`; },
};

export const AuthFormContext = createContext();

const AuthStepSlider = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const atSignup = useMemo(() => pathname === '/signup', [pathname])
  const validationSchema = new Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    ...(atSignup && {
      username: {
        type: String,
        required: true,
      }
    })
  }, errorMessages);


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
    direction, step, stepIndex, reset
  } = useSlider({ length: authSteps.length });

  useEffect(() => {
    reset();
  }, [atSignup]);

  const {
    handleBlur, handleChange, handleSubmit,
    values: userFields, setValues: setUserFields, errors, isSubmitting,
  } = useFormValidation({ validationSchema, initialValues, onSubmit })


  const [isTyping, setIsTyping] = useState(false);
  const $nextBtn = useRef();
  const $enterPassBtn = useRef();
  const $loginBtn = useRef();
  const startGhostLogin = () => {
    if (isTyping) { return };
    setIsTyping(true);
    setUserFields({});
    ghostType('demo@bot.com', letter => {
      setUserFields(({ email = '', ...prev }) => ({ ...prev, email: email + letter }))
    }, 1500)
      .then(() => sleep(500))
      .then(() => $nextBtn.current.click())
      .then(() => sleep(1000))
      .then(() => $enterPassBtn.current.click())
      .then(() => sleep(1000))
      .then(() => {
        return ghostType('password', letter => {
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
    $nextBtn, $enterPassBtn, $loginBtn, startGhostLogin
  };

  return (
    <StepSlider>
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
          <StepContainer>
            <AuthFormContext.Provider value={formContextValues}>
              {React.createElement(authSteps[stepIndex])}
            </AuthFormContext.Provider>
          </StepContainer>
        </motion.div>
      </AnimatePresence>
    </StepSlider>
  )
}

export default AuthStepSlider;
