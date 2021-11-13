import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Centerstone</title>
        <meta name="description" content="Centerstone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>Hello World</Container>
      </main>
    </div>
  );
};

export default Home;
