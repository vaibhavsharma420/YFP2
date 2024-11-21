import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";

const logos = [
    "./images/Img1.png",
    "./images/Img2.png",
    "./images/Img3.png",
    "./images/Img4.png",
    "./images/Img5.png",
    "./images/Img6.png",
    "./images/Img7.png",
    "./images/Img8.png",
    "./images/Img9.png",
    "./images/Img10.png",
    "./images/Img11.png",
    "./images/Img12.png",
    "./images/Img13.png",
    "./images/Img14.png",
  ];
  
  const Marque = () => {
    useGSAP(()=>{
        animateWithGsap('#features_title',{opacity:1})
      }, []);
    return (
        <>
       <h1 id="title" className='section-heading ml-10'>
              Our Partners
            </h1>
      <div className="relative overflow-hidden w-full py-20">
        
        {/* Full scrolling content */}
        <div className="flex animate-loop-scroll space-x-8 w-[calc(100vw+100%)]">
          {logos.map((src, index) => (
            <img
              key={index}
              src={src}
              loading="lazy"
              alt={`Logo ${index + 1}`}
              className="h-12 w-auto max-w-none object-contain"
            />
          ))}
          {/* Duplicate content to ensure seamless scrolling */}
          {logos.map((src, index) => (
            <img
              key={`duplicate-${index}`}
              src={src}
              loading="lazy"
              alt=""
              className="h-12 w-auto max-w-none object-contain"
            />
          ))}
        </div>
      </div>
      </>
    );
  };
  
  export default Marque;