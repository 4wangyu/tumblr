import React, { Fragment as F, useState, useRef } from 'react';
import { useTransition } from 'react-spring';
import { sleep, simulateTyping } from '../../util/bot';

import {
  AuthForm,
  Logo,
  StepWrapper,
  FormGroup, InputField,
  ActionBtn,
  ActionLink
} from './Auth.styled';

const Login = ({ processForm, errors, history }) => {

  // --------------------------------- FormData
  const _initialFormData = { email: '', password: '' }
  const [formData, setFormData] = useState(_initialFormData)

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData(prev => Object.assign({}, prev, { [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    processForm(formData)
      .then(() => history.push("/dashboard"));
  }


  // --------------------------------- Steps
  const Step1 = () => (
    <F>
      <FormGroup>
        <InputField
          onChange={handleInput}
          name="email" placeholder="Email"
          value={formData.email}
        />
      </FormGroup>
      <ActionBtn ref={$nextBtn} onClick={toggleNext}>Next</ActionBtn>
      <ActionBtn quarternary animate onClick={startDemoBot}>Demo</ActionBtn>
    </F>
  );

  const Step2 = () => (
    <F>
      <ActionBtn secondary>Send me a magic link</ActionBtn>
      <ActionBtn ref={$enterPassBtn} onClick={toggleNext}>Use password to log in</ActionBtn>
      <ActionLink onClick={toggleBack}>back</ActionLink>
    </F>
  );

  const Step3 = () => (
    <F>
      <FormGroup>
        <InputField
          onChange={handleInput}
          name="email" placeholder="Email"
          value={formData.email}
        />
        <InputField
          onChange={handleInput}
          type="password"
          name="password" placeholder="Password"
          value={formData.password}
        />
      </FormGroup>
      <ActionBtn ref={$loginBtn} onClick={handleSubmit}>Login</ActionBtn>
      <ActionLink>Forgot password?</ActionLink>
    </F>
  )
  const [step, setStep] = useState(0);
  const [reverse, setReverse] = useState(false);
  const Steps = [Step1, Step2, Step3];
  const transitions = useTransition([step], item => item, {
    from: {
      opacity: 0,
      marginLeft: reverse ? -500 : 500,
      position: 'absolute',
      marginTop: 80
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
    setFormData(_initialFormData);
    simulateTyping('a.segers.dev@gmail.com ', letter => {
      setFormData(prev => Object.assign({}, prev, { email: prev.email + letter }))
    }, 1500)
      .then(() => sleep(500))
      .then(() => $nextBtn.current.click())
      .then(() => sleep(1000))
      .then(() => $enterPassBtn.current.click())
      .then(() => sleep(1000))
      .then(() => {
        return simulateTyping('password', letter => {
          setFormData(prev => Object.assign({}, prev, { password: prev.password + letter }))
        }, 1000)
      })
      .then(() => sleep(2000))
      .then(() => { setBotRunning(false); $loginBtn.current.click(); });
  }
  // ----------------------------------------------  

  return (
    <AuthForm>
      <Logo large>thumblr</Logo>
      {transitions.map(({ item, props, key }) => (
        <StepWrapper key={key} style={props}>
          {React.createElement(Steps[item])}
        </StepWrapper>
      ))}
    </AuthForm>
  );
}

export default Login;