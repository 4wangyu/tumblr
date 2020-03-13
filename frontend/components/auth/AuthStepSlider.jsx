import React, { createContext, useState, useRef } from 'react'
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

export const AuthFormContext = createContext();

const AuthStepSlider = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const validationSchema = new Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // username: {
    //   type: String,
    //   required: true,
    // }
  });

  const authSteps = (pathname === '/signup') ? SignupSteps : LoginSteps;

  const initialValues = (pathname === '/signup') ? { email: '', password: '', username: '' } : { email: '', password: '' }

  const onSubmit = formUser => {
    return (
      (pathname === '/signup')
        ? dispatch(Session.signup(formUser))
        : dispatch(Session.login(formUser))
    ).then(() => history.push('/dashboard'));
  };

  const {
    decrement: slideLeft, increment: slideRight,
    direction, step, stepIndex,
  } = useSlider({ length: authSteps.length });

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
          variants={motionVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={motionTransitions}
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
