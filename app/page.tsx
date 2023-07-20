
import ProductContainer from '@/components/Products';
import FooterSitemapLinks from '@/components/Footer';
import Slider from '@/components/Slider';
import Category from '@/components/Category';
import SpecialOffer from '@/components/SpecialOffer';


export default function Home() {
  return (
    <main  className="lg:my-10 bg-white min-screen h-screen no-scrollbar">
      
      <Slider />
      <SpecialOffer/>
      <Category/>
      <ProductContainer />
      <FooterSitemapLinks/>
    </main>
  )
}
