import Test from './components/Test'
import MainHome from './components/MainHome'
import ResortsCarousel from './components/ResortsCarousel';
import CampingCarousel from './components/CampingCarousel';
import Services from './components/Services';

export default function Home() {
  return (
   <>

   <MainHome/>
   <Services/>
   <CampingCarousel/>
   <ResortsCarousel/>


   </>
  );
}
