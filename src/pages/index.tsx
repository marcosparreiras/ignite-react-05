import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$demoColor",
});

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button>Enviar</Button>
    </>
  );
}
