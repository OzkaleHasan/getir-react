import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";
import Title from "components/ui/Title";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function NextBtn({ className, style, onClick }) {
  return (
    <button className={'text-brand-color absolute top-1/2 -right-6 -translate-y-1/2'} onClick={onClick}>
      <MdArrowForwardIos/>
    </button>
  )
}
function PrevBtn({ className, style, onClick }) {
  return (
    <button className={'text-brand-color absolute top-1/2 -left-6 -translate-y-1/2 '} onClick={onClick}>
      <MdArrowBackIosNew />
    </button>
  )
}


export default function Campaigns() {

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    // cssEase: "linear"
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />
  };

  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider className="-mx-2" {...settings}>
        {banners.length && banners.map((banner, index) => (
          <div key={banner.id}>
            <picture className="block px-2">
              <img className="rounded-lg" src={banner.image} />
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  )
}
