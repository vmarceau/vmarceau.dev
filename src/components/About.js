import React from 'react';
import DownButton from './DownButton';
import useContentStyles from '../hooks/useContentStyles';

export default function About() {
  const classes = useContentStyles();

  return (
    <div className={classes.root} id="about">
      <div className={classes.content}>
        <h2>About me</h2>
        <p>
          I followed a slightly unusual professional trajectory, that brought me from physics to AI/ML and nowadays to
          software engineering, a field I am very passionate about.
        </p>
        <p>
          I currently work at{' '}
          <a href={'https://www.auth0.com'} target={'_blank'} rel={'noopener noreferrer'}>
            Auth0
          </a>{' '}
          (part of Okta) as a software engineer, where I am learning more about large-scale distributed systems,
          security, identity and access management.
        </p>
        <p>
          Before, I worked for a few years as a machine learning and software engineer at{' '}
          <a href={'https://www.xpertsea.com'} target={'_blank'} rel={'noopener noreferrer'}>
            XpertSea
          </a>
          , a tech startup aiming to improve aquaculture practices. This was an incredible experience and I got the
          opportunity to learn many skills. Prior to that, I started my journey in the industry at{' '}
          <a href={'https://www.abb.com'} target={'_blank'} rel={'noopener noreferrer'}>
            ABB
          </a>
          , where I spent some years as a signal processing engineer.
        </p>
        <p>
          Academically, I am trained as a computational physicist. During my MSc and PhD studies, I did research on
          complex network epidemiology and high intensity laser-matter interaction.
        </p>
        <p>
          On a personal level, I am the happy father of two kids. During my free time, I love to run, especially in the
          mountains. Running helps me to maintain a good balance and mental health. I have participated in a few
          ultramarathons, some of them up to{' '}
          <a href={'https://www.youtube.com/watch?v=iC7Lh4opLsc'} target={'_blank'} rel={'noopener noreferrer'}>
            100 miles
          </a>
          .
        </p>
        <p>
          If I ever find the time (and motivation), I would love to add a blog section to this website to share thoughts
          about various topics I'm interested about.
        </p>
        <p>
          You can find my complete resume on{' '}
          <a href={'https://www.linkedin.com/in/vincentmarceau'} target={'_blank'} rel={'noopener noreferrer'}>
            LinkedIn
          </a>
          .
        </p>
      </div>

      <div className={classes.break} />

      <DownButton to={'work'} />
    </div>
  );
}
