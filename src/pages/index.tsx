import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { HomeContainer, Product } from "../styles/pages/home";
import shirt01 from "../assets/1.png";
import shirt02 from "../assets/2.png";
import shirt03 from "../assets/3.png";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt01} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,89</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt02} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,89</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt03} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,89</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
