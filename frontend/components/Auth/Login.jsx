import React, { Fragment as F, useState } from 'react';
import { useTransition } from 'react-spring';

import {
  AuthForm,
  Logo,
  StepWrapper,
  FormGroup, InputField,
  ActionBtn,
  ActionLink
} from './Auth.styled';

const Step1 = ({ formData, handleInput, toggleNext }) => (
  <F>
    <FormGroup>
      <InputField
        onChange={handleInput}
        name="email" placeholder="Email"
        value={formData.email}
      />
    </FormGroup>
    <ActionBtn onClick={toggleNext}>Next</ActionBtn>
  </F>
);

const Step2 = ({ toggleBack, toggleNext }) => (
  <F>
    <ActionBtn secondary>Send me a magic link</ActionBtn>
    <ActionBtn onClick={toggleNext}>Use password to log in</ActionBtn>
    <ActionLink onClick={toggleBack}>back</ActionLink>
  </F>
);

const Step3 = ({ formData, handleInput, handleSubmit }) => (
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
    <ActionBtn onClick={handleSubmit}>Login</ActionBtn>
    <ActionLink>Forgot password?</ActionLink>
  </F>
)

const Login = ({ processForm, errors, history }) => {

  // ----------------------- FormData
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


  // ----------------------- Steps
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

  const _stepProps = {
    formData,
    handleInput,
    toggleBack,
    toggleNext,
    handleSubmit
  }

  return (
    <AuthForm>
      <Logo large>thumblr</Logo>
      {transitions.map(({ item, props, key }) => (
        <StepWrapper key={key} style={props}>
          {React.createElement(Steps[item], _stepProps, null)}
        </StepWrapper>
      ))}
    </AuthForm>
  );
}

export default Login;