"use client";
import { CiPlay1 } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import Container from "./container";

const LazyReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

//method call 
const Featured = () => {
  const videoUrl =
    "https://www.youtube.com/watch?v36V4f6A5YkI=";
  const [play, setPlay] = useState(false);

  return (
    <section id="featured_music" className="relative isolate bg-featured bg-cover bg-no-repeat">
      <div className="absolute z-10 inset-0 bg-bg-dark bg-opacity-90"></div>
      <Container>
        <div className="relative py-section z-20 flex flex-col lg:flex-row gap-20 lg:items-center px-container">
          <div
            data-aos="fade-up"
            className="flex-1 text-center lg:text-start "
          >
            <h2 className="text-right">
  ABOUT SMAXX <br className="hidden lg:block" />
</h2>
<p className="text-cyan text-right mx-auto lg:mx-50 mt-10 mb-12 max-w-[533px]">
  Hailing from Asheville, North Carolina, and later planting roots in Denver at the age of 9, Max has been immersed in a world of artistry and sound from day one. With a father who rocked stages in a band at 16 and a mother who mastered the streets as an artist, creativity runs deep in his veins. From the age of 4, Max was playing drums, piano, guitar, ukulele, singing, and, most notably, mastering the cowbell, which quickly became his signature touch.

  At 18, Max's musical journey took a turn toward the electronic scene, where he discovered a passion for producing. Now, six years deep into the world of production, he’s carved out a unique niche with his signature sound—a gritty fusion of downtempo, grimy riddim, trap, dubstep, and bass music. Max calls this distinct style "thug step."
</p>

            {/* <Link className="font-medium text-rose hover:text-white duration-300 transition-all ease-linear" href="/">
              MORE ABOUT US
            </Link> */}
          </div>
          <div data-aos="fade-up" className="flex-1 relative isolate">
            {!play && (
              <div className="absolute pointer-events-none inset-0 flex flex-col justify-center items-center pt-10">
                <div className="cursor-pointer w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 text-xl grid place-content-center to-purple-600 mb-[-30px]">
                  <CiPlay1 />
                </div>
                <Image
                  src={"/img/home/WATCH.png"}
                  width={242}
                  height={95}
                  alt=""
                />
              </div>
            )}
            <div className="flex justify-center">
              <LazyReactPlayer
                url={videoUrl}
                style={{ maxWidth: "640px" }}
                width="100%"
                height="540px"
                controls
                onPlay={() => {
                  setPlay(true);
                }}
                onPause={() => {
                  setPlay(false);
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Featured;
