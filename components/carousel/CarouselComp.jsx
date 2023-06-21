import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";



export default function CarouselComp() {
  return (
    <div>
      <Carousel id="begin" autoPlay={true} interval={800} infiniteLoop emulateTouch stopOnHover useKeyboardArrows showThumbs={false} showStatus={false} showArrows={false}>
      <div className="h-80">
          <Image width={600} height={600} className="h-full object-cover" alt="" src="/images/salad1.png"/>
          <div className="legend hidden md:block" style={{background:"transparent",position:"absolute",top:"50%",left:"80%"}}>
            <h1 style={{fontSize:"3rem"}}>Slide 1</h1>
          <button style={{background:"green", borderRadius:"15px", padding:"15px"}}>Order Now</button>
          </div>
          
          
        </div>
        <div className="h-80">
          <Image width={1000} height={500} className="h-full object-cover" alt="" src="https://s3.amazonaws.com/media.justsalad.com/assets/img/home_page/HP_SLIDER_Hero-Wraps.jpg" />
          <div className="legend hidden md:block" style={{background:"transparent",position:"absolute",top:"50%",left:"80%"}}>
            <h1 style={{fontSize:"3rem"}}>Slide 1</h1>
          <button style={{background:"green", borderRadius:"15px", padding:"15px"}}>Order Now</button>
          </div>          
        </div>
        
      </Carousel>
    </div>
  )
}
