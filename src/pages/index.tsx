import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$green300",
});

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button>Enviar</Button>
    </>
  );
}
