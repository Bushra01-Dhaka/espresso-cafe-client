import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {

    useEffect(() => {
        Aos.init();
      }, []);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(./coffee-cover.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="max-w-md">
            <h1 className="mb-5 text-4xl lg:text-6xl font-bold text-white ">Espresso Cafe</h1>
            <p className="mb-5">
            {`It's`} coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="btn border-0 rounded bg-yellow-800 text-white hover:bg-yellow-700">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
