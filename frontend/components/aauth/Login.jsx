import React, { Fragment as F, useState, useRef, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Thunks as Session } from 'store/session/actions';
import { useHistory } from 'react-router-dom';
import { useTransition } from 'react-spring';
import { sleep, ghostType } from 'util/ghost_bot';
import {
  AuthForm,
  Logo,
  StepWrapper,
} from './Auth.styled';
import { LoginStep1, LoginStep2, LoginStep3 } from './LoginSteps'


const Login = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const processForm = formUser => dispatch(Session.login(formUser))

  // --------------------------------- FormUser
  const _initialFormUser = { email: '', password: '' }
  const [formUser, setFormUser] = useState(_initialFormUser)

  const handleInput = e => {
    const { name, value } = e.target;
    setFormUser(prev => Object.assign({}, prev, { [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    processForm(formUser)
      .then(() => history.push("/dashboard"));
  }
  const [step, setStep] = useState(0);
  const [reverse, setReverse] = useState(false);
  const Steps = [LoginStep1, LoginStep2, LoginStep3];

  const transitions = useTransition([step], item => item, {
    from: {
      opacity: 0,
      marginLeft: reverse ? -500 : 500,
      position: 'absolute',
      marginTop: 130
    },
    enter: { opacity: 1, marginLeft: 0 },
    leave: { opacity: 0, marginLeft: reverse ? 500 : -500 }
  });

  const toggleBack = () => {
    let prevStep = step - 1 < 0 ? Steps.length - 1 : step - 1;
    setStep(prevStep);
    setReverse(true);
  };

  const toggleNext = () => {
    let nextStep = step + 1 < Steps.length ? step + 1 : 0;
    setStep(nextStep);
    setReverse(false);
  };
  // ----------------------------------------------

  // --------------------------------- Demo Bot
  const [botRunning, setBotRunning] = useState(false);
  const $nextBtn = useRef(null);
  const $enterPassBtn = useRef(null);
  const $loginBtn = useRef(null);
  const startDemoBot = () => {
    if (botRunning) { return };

    setBotRunning(true);
    setFormUser(_initialFormUser);
    ghostType('demo@bot.com', letter => {
      setFormUser(prev => Object.assign({}, prev, { email: prev.email + letter }))
    }, 1500)
      .then(() => sleep(500))
      .then(() => $nextBtn.current.click())
      .then(() => sleep(1000))
      .then(() => $enterPassBtn.current.click())
      .then(() => sleep(1000))
      .then(() => {
        return ghostType('password', letter => {
          setFormUser(prev => Object.assign({}, prev, { password: prev.password + letter }))
        }, 1000)
      })
      .then(() => sleep(400))
      .then(() => { setBotRunning(false); $loginBtn.current.click(); });
  }
  // ----------------------------------------------  

  const { email, password } = formUser;
  return (
    <AuthForm>
      <Logo large>thumblr</Logo>
      {transitions.map(({ item, props, key }) => (
        <StepWrapper key={key} style={props}>
          {React.createElement(
            Steps[item],
            {
              handleInput, handleSubmit,
              email, password,
              $nextBtn, $enterPassBtn, $loginBtn,
              toggleNext, toggleBack,
              startDemoBot
            }
          )}
        </StepWrapper>
      ))}
    </AuthForm>
  );
}

export default Login;