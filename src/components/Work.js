import React from 'react';
import useContentStyles from '../hooks/useContentStyles';
import cabaneIoPdf from '../assets/files/2019_09_28_vmarceau_cabaneio.pdf';

export default function Work() {
  const classes = useContentStyles();

  return (
    <div className={classes.root} id="work">
      <div className={classes.content}>
        <h2>Work</h2>
        <h3>Projects</h3>
        <p>
          At XpertSea, I had the chance to work on most aspects of the{' '}
          <a href={'https://xpertsea.com/valuable-insights'} target={'_blank'} rel={'noopener noreferrer'}>
            technology
          </a>
          , from the computer vision and deep learning models to the backend platform, the cloud infrastructure, and the
          mobile monitoring application.
        </p>
        <p>
          At ABB, I worked principally on lidar and radar level sensors, for which I was responsible for developing the
          signal processing software. I also worked on the modelling and signal processing of FTIR (Fourier Transform
          interferometers) instruments for space and defense contracts.
        </p>
        <h3>Talks</h3>
        <p>
          I gave a talk about OCR and text recognition with CRNN models at Cabane.io 2019. The recording is available on{' '}
          <a href={'https://www.youtube.com/watch?v=I6t5rLlXZWs'} target={'_blank'} rel={'noopener noreferrer'}>
            Youtube
          </a>{' '}
          (first 15 mins, in French only). The screen was unfortunately outside the camera field of view, but you can
          find the slides{' '}
          <a href={cabaneIoPdf} download>
            here
          </a>
          .
        </p>
        <p>
          I had the opportunity to give a few other talks during my time at XpertSea and my academic research years, but
          unfortunately none of them were recorded. Some of the material is available in conference proceedings.
        </p>
        <h3>Papers</h3>
        <p>
          I published a few scientific papers during my MSc and PhD research years. You can find the full list on my{' '}
          <a
            href={'https://scholar.google.ca/citations?user=_wqI44EAAAAJ&hl=en'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            Google Scholar
          </a>{' '}
          page.
        </p>
        <h3>Patents</h3>
        <p>
          During my time at XpertSea and ABB, I worked on technologies that made the object of patent applications. You
          can find more details on{' '}
          <a
            href={'https://patents.google.com/?inventor=%22Vincent+Marceau%22'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            Google Patents
          </a>
          .
        </p>
      </div>
    </div>
  );
}
