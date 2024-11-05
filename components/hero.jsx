// Main container wrapper 1170px d31448 
import Container from "./container";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white relative isolate py-10 overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-contain"
          src="/video/smaxxspider.mp4" // Path to the video file in the public/video folder
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="bg-hero-text z-10 absolute inset-0 md:top-1/4 left-[10%] right-[10%] bg-center bg-contain bg-no-repeat"></div>

      <div className="absolute z-20 inset-0 bg-bg-overly bg-opacity-20"></div>

      <Container className="relative z-30 flex flex-col justify-center min-h-screen">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div className="trigger animate-bounce">
            <a href="#featured_music" className="">
              <Image
                src={"/img/home/scroll-down arrow.png"}
                width={20}
                height={42}
                alt=""
              />
            </a>
          </div>
        </div>
      </Container>

      {/* Bottom Left and Right Images */}
      <div className="absolute bottom-0 left-0 z-30 p-4">
        <Image
          src="/img/L-Smaxx.png"
          // Responsive width and height
          width={150} // Smaller size for mobile
          height={225} // Smaller size for mobile
          className="md:w-[200px] md:h-[300px] lg:w-[300px] lg:h-[450px]" // Adjust sizes for different breakpoints
          alt="Left Smaxx Image"
        />
      </div>
      <div className="absolute bottom-0 right-0 z-30 p-4">
        <Image
          src="/img/R-Smaxx.png"
          // Responsive width and height
          width={150} // Smaller size for mobile
          height={225} // Smaller size for mobile
          className="md:w-[200px] md:h-[300px] lg:w-[300px] lg:h-[450px]" // Adjust sizes for different breakpoints
          alt="Right Smaxx Image"
        />
      </div>
    </section>
  );
};

export default Hero;
