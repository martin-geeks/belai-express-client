
import ProductContainer from '@/components/Products';
import FooterSitemapLinks from '@/components/Footer';
import Slider from '@/components/Slider';
import Category from '@/components/category';

export default function Home() {
  return (
    <main  className="bg-white min-screen h-screen no-scrollbar">
      <Slider />
      <Category/>
    <ProductContainer />
      <FooterSitemapLinks/>
    </main>
  )
}
