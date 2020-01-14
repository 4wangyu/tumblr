import React from 'react'
import {
  Background, NavBar, Logo,
  SearchBar, Btn, Form, Footer,
  PrimaryBtn
} from './styled';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestLogin = () => {

  return (
    <Background src="https://66.media.tumblr.com/eb343f7d720f33c6ea00461e7c858b2b/55d1789ecb7ff744-16/s2048x3072/601295b24402ca73b34572763b1b5e9a285089a7.png">
      <NavBar>
        <div>
          <Logo>th</Logo>
          <SearchBar>
            <SearchBar.Input
              type='text'
              placeholder='Search Thumblr'
            />
          </SearchBar>
        </div>
        <div>
          <Btn>Sign up</Btn>
        </div>
      </NavBar>
      <Form.Container>
        <Logo large>thumblr</Logo>
        <Form>
          <Form.Input type="text" placeholder="Email" />
          <PrimaryBtn>Next</PrimaryBtn>
        </Form>

      </Form.Container>
      <Footer>

      </Footer>

    </Background>
  )
}

export default TestLogin;