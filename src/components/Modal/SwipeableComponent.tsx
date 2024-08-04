import React from "react"
import { useSwipeable } from "react-swipeable";

const swipeStyle:React.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
  margin: 'auto', // Asegura que el contenedor está centrado en el socialSlider
  overflow: 'hidden',
}

const SwipeableComponent = ({ children, nextSlide, prevSlide }: { children:React.ReactNode, nextSlide:() => void, prevSlide:() => void }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true
  });
  return <div style={swipeStyle} {...handlers}>{children}</div>
}

export default SwipeableComponent;