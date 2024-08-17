"use client";

import React from "react";
//import Image from "next/image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const images = [
    { src: "/pic.jpg", width: 600, height: 400 },
    { src: "/pic.jpg", width: 600, height: 400 },
    { src: "/pic.jpg", width: 600, height: 400 },
    { src: "/pic.jpg", width: 600, height: 400 },
];

const Carasouel = () => {

    return (
        <div className="w-full h-screen bg-[#201E1D]">
        <div className="w-[99%] mx-auto h-screen bg-[#F8F1DE] rounded-2xl">
        <div className="w-6/12 mx-auto">
            <h1 className="text-4xl text-center initiative_font">Kartavya</h1>
            <p className="text-center mt-4 font-dm-sans font-medium">
                All our campaigns come under the roof of our “Kartavya”.
            </p>
        </div>

        <div className="w-full mx-auto my-12">
            <Splide
                options={{
                    type: "loop",
                    perPage: 1,
                    perMove: 1,
                    pagination: false,
                    arrows: true,
                    gap: "2rem",
                    width: "100%",
                    autoWidth: true,
                    focus: "center",
                    trimSpace: true,
                }}

                aria-label="Image Carousel"
            >
                {images.map((image, index) => (
                    <SplideSlide key={index}>
                        <div className="tablet:w-[52vw]  small_tablet:w-[65vw] mobile:w-[70vw] small_mobile:w-[80vw]  relative">
                            <img
                                src={image.src}
                                alt=""
                                className="pt-1 tablet:h-[40vh]  small_mobile:h-[20vh] small_mobile:w-[94%] mobile:h-[35vh] small_tablet:h-[30vh] tablet:w-[98%] mx-auto border-2 border-white border-dashed rounded-xl"
                                style={{borderRadius:"30px"}}
                            />
                            <div>
                                <p className="font-dm-sans font-normal small_mobile:w-[88%] tablet:w-[95%] mx-auto text-white pb-6">Alcheringa stands against the backdrop of communal disharmony plaguing India. Through AIKYAM, we aim to foster unity and peace. Expect thought-provoking panel discussions, soul-stirring performances, and impactful fundraisers. Join us in building a harmonious future.</p>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    </div>
        </div>
       
    );
};

export default Carasouel;