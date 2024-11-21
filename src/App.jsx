import Centre from "./components/Centre";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
     <main className="bg-black">
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Features/>
        <Centre/>
        <Marque/>
        <Footer/>
     </main>
    </>
  )
}

export default App;
