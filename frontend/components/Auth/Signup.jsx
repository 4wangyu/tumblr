import React, { Fragment as F, useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Thunks as Session } from 'store/session/actions';
import { useHistory } from 'react-router-dom';
import { useTransition } from 'react-spring';
import { Link } from 'react-router-dom';

import {
  AuthForm,
  Logo,
  SubHeading,
  StepWrapper,
  FormGroup, InputField,
  ActionBtn,
  ActionLink
} from './Auth.styled';


const Splash = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const processForm = formUser => dispatch(Session.signup(formUser))

  // ----------------------- UserData
  const _initialUserData = { email: '', password: '', username: '' }
  const [userData, setUserData] = useState(_initialUserData)
  const handleInput = e => {
    const { name, value } = e.target;
    console.log(value);
    setUserData(prev => Object.assign({}, prev, { [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    processForm(userData)
      .then(() => history.push("/dashboard"));
  }


  // ----------------------- Steps
  const Step1 = memo(() => (
    <F>
      <ActionBtn onClick={toggleNext}>Get Started</ActionBtn>
      <ActionBtn tertiary as={Link} to='/login'>Log In</ActionBtn>
    </F>
  ));

  const Step2 = memo(() => (
    <F>
      <FormGroup>
        <InputField
          key={'step2-email'}
          onChange={handleInput}
          name="email"
          value={userData.email}
        />
        <InputField
          key={'step2-password'}
          onChange={handleInput}
          name="password"
          value={userData.password}
        />
        <InputField
          key={'step2-username'}
          onChange={handleInput}
          name="username"
          value={userData.username}
        />
      </FormGroup>
      <ActionBtn onClick={handleSubmit}>Sign up</ActionBtn>
    </F>
  ));

  const [step, setStep] = useState(0);
  const [reverse, setReverse] = useState(false);
  const Steps = [Step1, Step2];
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

  return (
    <AuthForm>
      <Logo large>thumblr</Logo>
      <SubHeading>
        <span>Come for what you love.</span>
        <span>Stay for what you discover.</span>
      </SubHeading>
      {transitions.map(({ item, props, key }) => (
        <StepWrapper key={key} style={props}>
          {React.createElement(Steps[item])}
        </StepWrapper>
      ))}
    </AuthForm>
  );
}

export default Splash;