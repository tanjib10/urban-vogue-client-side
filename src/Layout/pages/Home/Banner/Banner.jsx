import img1 from "../../../../assets/Banner image/13248637_5200386.jpg";
import img2 from "../../../../assets/Banner image/2150871358.jpg";
import img3 from "../../../../assets/Banner image/2150950908.jpg";
import img4 from "../../../../assets/Banner image/23030.jpg";
import img5 from "../../../../assets/Banner image/pretty-woman-looking-new-dress.jpg";
import img6 from "../../../../assets/Banner image/online-fashion-shopping-with-laptop.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img3} />
          {/* <button className="btn legend">Shop Now</button> */}
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img6} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img2} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
