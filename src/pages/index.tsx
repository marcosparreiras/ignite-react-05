import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import shirt01 from "../assets/1.png";
import shirt02 from "../assets/2.png";
// import shirt03 from "../assets/3.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt01} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,89</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt02} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,89</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
