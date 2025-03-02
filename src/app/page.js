import FeatureFlowers from "@/components/FeatureFlowers";
 import Hero from "@/components/Hero";
 import HotDeal from './../components/HotDeal';
 import Instagram from './../components/Instagram';
 import LatestDeal from './../components/LatestDeal';
 import Footer from './../components/Footer';

export default function Home() {
  return (
    <div>
    <Hero />
    <FeatureFlowers />
    <HotDeal/>
    <Instagram/>
    <LatestDeal/>
    <Footer/> 
  </div>
    
    
  );
}
