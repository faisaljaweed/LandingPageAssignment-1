
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img7 from "../images/07.png";
import img3 from "../images/03.png";
import img17 from "../images/17.png";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
export default function BannerSlider() {
  return (
    <div>
      <Slider {...settings}>
        <section className="md:flex md:justify-center md:items-center">
            <img src={img3} className="max-w-full h-auto mx-auto"/>
        </section>
        <section className="md:flex md:justify-center md:items-center">
            <img src={img7} className="max-w-full h-auto mx-auto"/>
        </section>
        <section className="md:flex md:justify-center md:items-center">
            <img src={img17} className="max-w-full h-auto mx-auto"/>
        </section>
      </Slider>
    </div>
  )
}
