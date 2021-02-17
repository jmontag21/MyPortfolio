import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaEnvelopeSquare,
  FaGithubSquare
} from 'react-icons/fa';

import resume from './Jonathan-Alec-Montag-Resume.pdf'

import {
  SocialIconLink
} from '../Footer/FooterElements';

import Video from '../../videos/space2.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Jonathan Montag</HeroH1>
        <HeroP>
          Software Developer
        </HeroP>
        <HeroP>
          <a href = {resume} target = "_blank"  style = {{'color':'white'}}>View Resume</a>
        </HeroP>
        <HeroP>
        <SocialIconLink href='https://www.linkedin.com/in/jonathan-montag-730017142/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink href="mailto:Jmontag1@pride.hofstra.edu" target='_blank' aria-label='Linkedin'>
                <FaEnvelopeSquare />
              </SocialIconLink>

              <SocialIconLink href="https://github.com/jmontag21" target='_blank' aria-label='Linkedin'>
                <FaGithubSquare />
              </SocialIconLink>
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            About Me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
