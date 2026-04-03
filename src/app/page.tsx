import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/Features";
import MainSlider from "@/components/home/MainSlider";
import Newsletter from "@/components/home/Newsletter";
import PromoCards from "@/components/home/PromoCards";

export default function Home() {
  return (
    <>
      <MainSlider />
      <Features />
      <Categories />
      <PromoCards />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
}
