import './App.css'
import 'tailwindcss/tailwind.css';
import AboutUs  from "./components/AboutUs"
import Banner  from "./components/Banner"
import Portales  from "./components/Portales"
import Information  from "./components/Information"
import Nav from "./components/nav"
import Head from "./components/head"
import Footer from './components/footer';

function App() {

  return (
    <>
      <Nav/>
      <Head/>
      <AboutUs/>
      <Banner/>
      <Portales/>
      <Information/>
      <Footer/>
    </>
  )
}

export default App
