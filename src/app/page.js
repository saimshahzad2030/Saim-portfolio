import About from "@/components/AboutSection/About";
import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Navbar/Navbar";
import SliderComponent from "@/components/Slider/Slider";

export default function Home() {
  return (
    <>
    <Navbar selectedLink={'home'}/>
    <Landing/>
    <About/>
    <Footer/>
    <Copyright/>
    </>
  );
}
