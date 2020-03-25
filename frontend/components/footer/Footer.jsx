import React from 'react'
import { FooterWrapper, FooterLink, GithubIcon, LinkedinIcon } from './Footer.styled';

const Footer = () => (
  <FooterWrapper>
    <span>Created by <strong>Alex Segers</strong></span>
    <FooterLink href="https://github.com/segersalex">
      <GithubIcon />
    </FooterLink>
    <FooterLink href="https://www.linkedin.com/in/alex-segers-50b917173/">
      <LinkedinIcon />
    </FooterLink>
  </FooterWrapper>
);

export default Footer;