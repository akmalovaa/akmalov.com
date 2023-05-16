import React from 'react';
import clsx from 'clsx';
import styles from '../pages/index.module.css';


export default function HeroTest({ Svg, title, description }) {
  return (
    <section className={clsx('hero hero--primary')} >
      <div className="container">
        <div className="hero--primary">
          <div className="container">
            <h1 className="hero__subtitle2"> О сайте </h1>
          </div>
        </div>
        <div class="alert alert--secondary" role="alert">
          <button aria-label="Close" class="clean-btn close" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
          This is a <strong>secondary</strong> alert. It's not too important, you may ignore it.
        </div>
      </div>
      
    </section> 
    // // <div class="hero shadow--lw">
    //   <div class="container">
    //     <h1 class="hero__title">Hero Title</h1>
    //     <p class="hero__subtitle">Not all heroes wear capes</p>
    //     <div>
    //       <button class="button button--secondary button--outline button--lg">
    //         Get Started
    //       </button>
    //     </div>
    //   </div>
    // // </div>
      // ---
    //   <div className="container, styles.heroBanner">
    //     <h1 className="hero__title"> Tilte </h1>
    //     <p className="hero__subtitle"> 232 </p>
    //   </div>
    );
}

