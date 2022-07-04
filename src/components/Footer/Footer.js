import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:+63-936-148-5580'>+63-936-148-5580</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:ralphmaronilla003@gmail.com'>ralphmaronilla003@gmail.com</LinkItem>
      </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Lets Make Something Great</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href='https://github.com/hplar003'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/ralphwinstonmaronilla/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/ralphmaronilla/'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
      </SocialContainer>
     </SocialIconsContainer>
     
   </FooterWrapper>
  );
};

export default Footer;
