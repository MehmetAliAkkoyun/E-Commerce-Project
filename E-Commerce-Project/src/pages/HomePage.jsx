import HeroSlider from "../components/HeroSlider";
import EditorsPick from "../components/EditorsPick";
import FeaturedProducts from "../components/FeaturedProducts";
import VitaClassic from "../components/VitaClassic";
import NeuralUniverse from "../components/NeuralUniverse";
import FeaturedPosts from "../components/FeaturedPosts";
import Footer from "../components/Footer";


export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <EditorsPick />
      <FeaturedProducts />
      <VitaClassic />
      <NeuralUniverse />
      <FeaturedPosts />
      <Footer />
    </>
  );
}
