import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      >
        <div>
          <SliderItem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6vQf3mAxvIRZ2s87yLVDMwS2F1KpxUk0Yw&usqp=CAU" />
        </div>
        <div>
          <SliderItem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6vQf3mAxvIRZ2s87yLVDMwS2F1KpxUk0Yw&usqp=CAU" />
        </div>
        <div>
          <SliderItem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6vQf3mAxvIRZ2s87yLVDMwS2F1KpxUk0Yw&usqp=CAU" />
        </div>
      </Slider>
    </Wrapper>
  );
}
