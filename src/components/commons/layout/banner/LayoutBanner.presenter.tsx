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
          <SliderItem src="https://img.freepik.com/premium-vector/multicultural-business-team_1325-2429.jpg?w=2000" />
        </div>
        <div>
          <SliderItem src="https://img.freepik.com/premium-vector/unity-multicultural-diversity-team-friendship-concept_140689-1893.jpg?w=2000" />
        </div>
        <div>
          <SliderItem src="https://img.freepik.com/premium-vector/friendly-encouragement-approval-concept_140689-141.jpg?w=2000" />
        </div>
      </Slider>
    </Wrapper>
  );
}
