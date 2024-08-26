import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Portales from "../components/Portales";
import Information from "../components/Information";
import Layout from "./Layout";
import Head from "../components/head";

function HomePage() {
  return (
    <Layout>
      <Head />
      <AboutUs />
      <Banner />
      <Portales />
      <Information />
    </Layout>
  );
}

export default HomePage;
