import CarouselComp from '../components/carousel/CarouselComp';
import Footer from '../components/footer/Footer';
import Orderable from '../components/orderable/Orderable';
import Quotes from '../components/quotes/Quotes';

export default function Home() {
  return (
    <>
    <div> 
    <CarouselComp/> 
    <Quotes/>
    <Orderable/>
    <Footer/>
    </div>
    </>
  );
}
