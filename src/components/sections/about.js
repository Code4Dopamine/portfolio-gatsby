import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      // filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'HTML/CSS',
    'JavaScript(ES6+)',
    'Express',
    'Node.js',
    'MongoDB',
    'React',
    'Cloud (AWS & Google)',
    'Some Java & Python',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hi!</p>
            <p>
              My name is Edward and I love designing and building web apps! As a developer, I am passionate about developing websites that are easy-to-use and allow users to find whatever they need quickly.
            </p>
            <p>
              I also love tinkering and learning new things in tech, such as trying out <a href="https://drive.google.com/drive/folders/11W58YDApqdYQhPiVTNiehMztj0yfhd37?usp=share_link">ML Applications</a>, <a href="https://drive.google.com/drive/folders/1dzTIsofR7N725ZpPs37i80UeF3YN4G7L?usp=share_link">3D Modeling / Printing</a>, <a href="https://drive.google.com/drive/folders/1PSTvVgwpIfLu2Xmhpcvaas3-1ZUZ637e?usp=share_link">UX Design</a>, <a href="https://drive.google.com/drive/folders/1coJAKEKbXKGl2pmVgXP-q-P-79J9nHzy">Tinkering with Electronics</a> or <a href="https://drive.google.com/drive/folders/1YPjAW1c5RgWxI2i-z3NRbsNChikJgMRi">building robots</a>, and attending Hackthons Events [<a href="https://twitter.com/johnwalicki/status/787613210769813508">1</a> , <a href="https://drive.google.com/drive/folders/1GQm1HzLq_5Y2P_AMwoPN8O5QB3VmViAT?usp=share_link">2</a>] to put my skills into practice!
            </p>
            
            {/* <p>
              (p2) 
            </p>

            <p>
              (p3) 
            </p> */}

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/profile-square.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
