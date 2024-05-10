

import img1 from '../images/01.jpg';
import img2 from'../images/02.jpg'
import img3 from '../images/03.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';
import img13 from '../images/13.png';
import img14 from '../images/14.png';
import img15 from '../images/15.png';
import img16 from '../images/16.png';
import img4 from "../images/04.png";
import img5 from "../images/05.png";
import img6 from "../images/06.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSlider from './BannerSlider';
import Section3 from './Section3';
import Section4 from './Section4';
import Footer from './Footer';
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, // Medium devices (tablets, 768px and up)
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // Small devices (landscape phones, 576px and up)
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const data=[
{
text:"Sofa",
images:{img11}
},
{
text:"Bed",
images:{img12}
},
{
text:"Dresser",
images:{img13}
},
{
text:"Shelf",
images:{img14}
},
{
  text:"Lamp",
  images:{img15}
},
{
  text:"Decor",
  images:{img16}
}


]

export default function Section2() {
  return (
    <div>
      <section className='md:flex md:justify-center md:items-center'>
      <img src={img1}/>
      </section>
      <section className='md:flex md:justify-center md:items-center'>
      <h5 className='pl-4 pr-4 pt-3 md:w-[700px] md:text-center'>
      FurniLux: Where Style Unfolds. 
      Explore a curated collection of 
      exquisite furniture on our landing page, 
      designed to elevate your space. Immerse yourself 
      in the fusion of modern aesthetics and comfort. 
      Redefine your home with FurniLux – where every piece 
      tells a story of timeless elegance.
      </h5>
      </section>
      <section className='pl-5 pr-5 pt-5 md:flex md:justify-center md:items-center md:flex-col '>
      <img src={img2} className='md:w-[700px]' />
      <img src={img2} className='pt-5 md:w-[700px]' />
      </section>
      <h3 className='text-center text-2xl font-bold pt-5'>Full Preview</h3>
      <section className='pl-5 pr-5 pt-5 md:flex md:justify-center md:items-center '>
        <img src={img3}  className='md:w-[700px]' />
      </section>
      <section className='flex flex-row justify-center items-center gap-1 md:gap-3  '>
        {data.map((item)=>(
          <div >
            <div className='flex flex-row gap-1 font-extrabold bg-white p-[2px] md:p-[8px] justify-center items-center shadow-lg hover:bg-[#dbf2ea]' 
            style={{ boxShadow: '0px 0px 3px 4px grey' }}>
            <img src={img11} className='w-2 h-2 md:w-4 md:h-4'/>
            <h6 className='text-[4px] md:text-[8px]'>{item.text}</h6>
            </div>
          </div>
        ))}
      </section>
      <h3 className='text-center text-2xl font-bold pt-5'>Evelate Your Living Room </h3>
      <section className=''>
        <Slider {...settings}>
          <div className=' flex justify-center'>
            <img src={img4} className='max-w-full h-auto mx-auto'/>
          </div>
          <div className=' flex justify-center'>
            <img src={img5} className='max-w-full h-auto mx-auto'/>
          </div>
          <div className=' flex justify-center'>
            <img src={img6} className='max-w-full h-auto mx-auto'/>
          </div>
          <div className=' flex justify-center'>
            <img src={img4} className='max-w-full h-auto mx-2'/>
          </div>
          <div className=' flex justify-center'>
            <img src={img5} className='max-w-full h-auto mx-auto'/>
          </div>
          <div className=' flex justify-center'>
            <img src={img6} className='max-w-full h-auto mx-auto'/>
          </div>
        </Slider>
      </section>
      <BannerSlider/>
      <Section3/>
      <BannerSlider/>
      <Section4/>
      <Footer/>
    </div>
  )
}
