import { useEffect } from "react";
import gsap from "gsap";

const Loader = ({ finishLoading }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => finishLoading(), // hide loader after animation
    });

    tl.fromTo(
      ".loader-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    ).to(".loader", {
      y: "-100%",
      duration: 1,
      delay: 1,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <div className="loader fixed top-0 left-0 w-full h-screen bg-black z-50 flex items-center justify-center">
      <h1 className="loader-text text-white text-4xl font-bold">NeonWorks</h1>
    </div>
  );
};

export default Loader;
