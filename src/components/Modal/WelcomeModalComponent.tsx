import React from "react";
import {
  Dialog,
  DialogSurface,
  DialogBody,
  DialogContent,
} from "@fluentui/react-components";
import styles from "./WelcomeModel.module.scss";
import welcomeImage from "../../assets/welcome.png";
import welcomeImage2 from "../../assets/welcome2.png";
import { useSwipeable } from 'react-swipeable';
import SwipeableComponent from "./SwipeableComponent";



interface ModalProps {}

interface SocialState {
  activeSlide: number;
  openModal: boolean;  // Flag to control the visibility of the modal
  slides: SocialElement[]
}

interface SocialElement {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  active: boolean;
}



export default class WelcomeModalComponent extends React.Component<ModalProps, SocialState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = { 
      activeSlide: 0,
      openModal: true, 
      slides: [
        {
          image: welcomeImage,
          title: "¡Hola, Maria!",
          subtitle: "¿Te gustaría conocer lo que tenemos para ti?",
          description: "Descubre este nuevo espacio donde podrás estar al día con todo lo que ocurre en Mercantil.",
          active: true
        },
        {
          image: welcomeImage2,
          title: "¿Qué te ofrece Somos Mercantil?",
          description: "Tendrás acceso directo a información de tu interés, así como a las plataformas y redes sociales de Mercantil.",
          active: false
        }
      ]
  };
}

  nextSlide = () => {
    this.setState(prevState => ({
      activeSlide: (prevState.activeSlide + 1) % prevState.slides.length,
      slides: prevState.slides.map((slide, index) => ({
        ...slide,
        active: index === ((prevState.activeSlide + 1) % prevState.slides.length)
      }))
    }));
  }
  
  prevSlide = () => {
    this.setState(prevState => {
      const newActiveSlide = (prevState.activeSlide - 1 + prevState.slides.length) % prevState.slides.length;
      return {
        activeSlide: newActiveSlide,
        slides: prevState.slides.map((slide, index) => ({
          ...slide,
          active: index === newActiveSlide
        }))
      };
    });
  }

  buttonClickSlide = (activeNumber: number) => {
    this.setState({ activeSlide: activeNumber, slides: this.state.slides.map((slide, index) => ({
     ...slide,
      active: index === activeNumber
    })) });
  }

  handleModal = () => {
    this.setState(prevState => {
      return { ...prevState, openModal:!prevState.openModal };
    });
  }

  


  render(): React.ReactElement {
    const { activeSlide } = this.state;
    const slideStyles = (index: number) => ({
      transform: `translateX(${(index - activeSlide) * 200}%)`,
      transition: 'transform 0.5s ease-in-out'
    });
    return (
      <Dialog open={this.state.openModal}>
        <DialogSurface>
          <DialogBody style={{
            width: '100%',
            height: '491.24px',
            gap: '0'
          }}>
            <DialogContent>
              <SwipeableComponent nextSlide={this.nextSlide} prevSlide={this.prevSlide}>
              <div className={styles.containterModal}>
                  <button onClick={this.handleModal} className={styles.closeButton}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.22099 8.19093C6.39278 8.01914 6.39278 7.74062 6.22099 7.56883L0.733979 2.08182C0.328614 1.67645 0.328613 1.01923 0.733979 0.613862C1.13934 0.208496 1.79657 0.208497 2.20194 0.613862L7.68895 6.10088C7.86074 6.27266 8.13926 6.27266 8.31105 6.10088L13.7981 0.613862C14.2034 0.208496 14.8607 0.208497 15.266 0.613862C15.6714 1.01923 15.6714 1.67645 15.266 2.08182L9.77901 7.56883C9.60722 7.74062 9.60722 8.01915 9.77901 8.19093L15.266 13.6779C15.6714 14.0833 15.6714 14.7405 15.266 15.1459C14.8607 15.5513 14.2034 15.5513 13.7981 15.1459L8.31105 9.65889C8.13926 9.4871 7.86074 9.4871 7.68895 9.65889L2.20194 15.1459C1.79657 15.5513 1.13934 15.5513 0.733979 15.1459C0.328614 14.7405 0.328614 14.0833 0.733979 13.6779L6.22099 8.19093Z" fill="url(#paint0_linear_414_2082)"/>
                        <defs>
                        <linearGradient id="paint0_linear_414_2082" x1="8" y1="-0.120117" x2="8" y2="15.8799" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#009FDA"/>
                        <stop offset="1" stopColor="#004E9B"/>
                        </linearGradient>
                        </defs>
                      </svg>
                  </button>
                  {
                    this.state.activeSlide < this.state.slides.length - 1 
                    &&
                    <button onClick={this.nextSlide} className={styles.arrowNext}>
                    <svg width="22" height="39" viewBox="0 0 22 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.88705 0.858778C3.1641 0.114747 1.96945 0.114747 1.2465 0.858778C0.552359 1.57317 0.552357 2.7101 1.2465 3.42449L16.5279 19.1516C16.7164 19.3456 16.7164 19.6544 16.5279 19.8484L1.2465 35.5755C0.552359 36.2899 0.552359 37.4268 1.2465 38.1412C1.96945 38.8853 3.1641 38.8853 3.88705 38.1412L21.3229 20.1969C21.6999 19.8088 21.6999 19.1912 21.3229 18.8031L3.88705 0.858778Z" fill="url(#paint0_linear_414_2064)"/>
                        <defs>
                        <linearGradient id="paint0_linear_414_2064" x1="11" y1="-0.5" x2="11" y2="39.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#009FDA"/>
                        <stop offset="1" stopColor="#004E9B"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </button>
                  }
                  { 
                  this.state.activeSlide > 0 
                  && 
                  <button onClick={this.prevSlide} className={styles.arrowPrev}>
                    <svg width="22" height="39" viewBox="0 0 22 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M18.113 0.858778C18.8359 0.114747 20.0306 0.114747 20.7535 0.858778C21.4476 1.57317 21.4476 2.7101 20.7535 3.42449L5.47211 19.1516C5.28358 19.3456 5.28357 19.6544 5.47211 19.8484L20.7535 35.5755C21.4476 36.2899 21.4476 37.4268 20.7535 38.1412C20.0306 38.8853 18.8359 38.8853 18.113 38.1412L0.677123 20.1969C0.300051 19.8088 0.300051 19.1912 0.677123 18.8031L18.113 0.858778Z" fill="url(#paint0_linear_440_1345)"/>
                      <defs>
                        <linearGradient id="paint0_linear_440_1345" x1="11" y1="-0.5" x2="11" y2="39.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#009FDA"/>
                          <stop offset="1" stopColor="#004E9B"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </button> 
                  }
                {
                      this.state.slides.length > 0 && 
                      this.state.slides.map((slide, index) => (
                        <div key={index} style={slideStyles(index)}>
                          <div className={styles.content}>
                            <img src={slide.image} alt="welcome image"/>
                            <div className={styles.contentFooter}>
                              {slide.title && <h2>{slide.title}</h2>}
                              {slide.subtitle && <h4>{slide.subtitle}</h4>}
                              {slide.description && <p>{slide.description}</p>}
                            </div>
                            
                          </div>
                        </div>
                      ))
                }
                {
                  this.state.slides.length > 0 && 
                  <div className={styles.containerButtons}>
                    {this.state.slides.map((slide, index) => (
                      <button onClick={() => this.buttonClickSlide(index)} key={index} className={`${styles.button} ${slide.active ? styles.active : ""}`}></button>
                    ))}
                  </div>
                }
              </div>
              </SwipeableComponent>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
    </Dialog>
    );
  }
}