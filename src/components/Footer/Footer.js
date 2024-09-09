import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
         <LinkTitle>Email</LinkTitle>
         <LinkItem href="mailto:joseph.a.perez56789@gmail.com">joe.a.perez56789@gmail.com</LinkItem>
         <LinkTitle>Call or Text</LinkTitle>
         <LinkItem href="tel:209-905-8930">209-905-8930</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>Joseph Perez</Slogan>

        </CompanyContainer>
        <SocialIcons href="https://github.com/bluespirit777" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/joseph-perez-5515b0321" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="mailto:joseph.a.perez56789@gmail.com?subject=Contact%20via%20Portfolio%20Website">
          <AiFillMail size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
