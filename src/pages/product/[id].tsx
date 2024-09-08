import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return <h1>Product with id: {query.id}</h1>;
}
