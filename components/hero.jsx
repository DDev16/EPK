// Main container wrapper 1170px d31448 
import Container from "./container";
import Image from "next/image";
//method call 
const Hero = () => {
  return (
    <section className="min-h-screen relative isolate bg-hero bg-cover bg-no-repeat py-10">
      
      <div className="bg-hero-text z-10 absolute inset-0 md:top-1/4 left-[10%] right-[10%] bg-center bg-contain bg-no-repeat"></div>

      <div className="absolute z-20 inset-0 bg-bg-overly bg-opacity-20"></div>

      <Container className="relative z-30 flex flex-col justify-center min-h-screen">
        <h1
          data-aos="fade-up"
          className="text-7xl sm:text-9xl md:text-[160px] lg:text-[180px] uppercase text-center leading-snug md:leading-[160px] font-bold my-20 sm:my-32 md:my-60"
        >
          Sing <br />
          with us
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          <p className="text-base text-center lg:text-start font-medium uppercase">
            WE ARE BEST MUSIC BRAND IN THE CITY <br />
            CHECK OUR WEBSITE
          </p>
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
    </section>
  );
};

export default Hero;
