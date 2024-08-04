import React from "react";
import { XEmbed } from "react-social-media-embed";
import styles from "./SocialMedia.module.scss";

interface SocialProps {}

interface SocialState {
  activeSlide: number;
}

export default class SocialMediaComponent extends React.Component<SocialProps, SocialState> {
  constructor(props: SocialProps) {
    super(props);
    this.state = { activeSlide: 0 };
  }

  nextSlide = () => {
    this.setState(prevState => ({
      activeSlide: (prevState.activeSlide + 1) % 3
    }));
  }
  
  prevSlide = () => {
    this.setState(prevState => ({
      activeSlide: (prevState.activeSlide + 2) % 3
    }));
  }

  render(): React.ReactElement {
    const { activeSlide } = this.state;
    const slideStyles = (index: number) => ({
      transform: `translateX(${(index - activeSlide) * 200}%)`,
      transition: 'transform 0.5s ease-in-out'
    });

    return (
      <div className={styles.socialSlider}>
        <div className={styles.buttonContainer}>
          <button onClick={this.prevSlide}>Prev</button>
          <button onClick={this.nextSlide}>Next</button>
        </div>
        <div className={styles.slidesContainer} style={{ display: 'flex' }}>
          <div style={slideStyles(0)}>
            <XEmbed url="https://x.com/MercantilBanco/status/1816097981273153563" width={'100%'} height={'100%'} />
          </div>
          <div style={slideStyles(1)}>
            <iframe src="https://www.instagram.com/p/C9z1KEmR-uR/embed" width={'100%'} height={'100%'} frameBorder={0} allowFullScreen={true}  allowTransparency={true}></iframe>
          </div>
          <div style={slideStyles(2)}>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7118625656220868608" width={'100%'} height={'100%'} allowFullScreen={true} title="Publicación integrada"></iframe>
          </div>
        </div>
      </div>
    );
  }
}