"use client";

import React from "react";
//import Image from "next/image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
const images = [
    { src: "/pic.jpg", width: 600, height: 400 },
    { src: "/pic.jpg", width: 600, height: 400 },
    { src: "/pic.jpg", width: 600, height: 400 },
    { src: "/pic.jpg", width: 600, height: 400 },
];

const Carasouel = () => {

    return (
        <div className="w-full h-screen bg-[#201E1D]">
            <div className="w-[99%] mx-auto h-screen bg-[#F8F1DE] rounded-2xl pt-10">
                <div className="w-6/12 mx-auto">
                    <h1 className="text-[4vmax] text-center font-[thunFont] ">Kartavya</h1>
                    <p className="text-center mt-4 font-dm-sans font-medium">
                        All our campaigns come under the roof of our “Kartavya”.
                    </p>
                </div>

                <div className="w-full mx-auto my-12 p-4">
                    <Splide
                        hasTrack={false}
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
                        <SplideTrack>
                            {images.map((image, index) => (
                                <SplideSlide key={index}>
                                    <div className="tablet:w-[52vw] small_tablet:w-[65vw] mobile:w-[70vw] small_mobile:w-[80vw] relative p-4">
                                        <img
                                            src={image.src}
                                            alt=""
                                            className="pt-1 tablet:h-[40vh] small_mobile:h-[20vh] small_mobile:w-[94%] mobile:h-[35vh] small_tablet:h-[30vh] tablet:w-[98%] mx-auto border-2 border-white border-dashed rounded-[30px]"
                                            style={{ borderRadius: "30px" }}
                                        />
                                        <div>
                                            <p className="font-dm-sans font-normal small_mobile:w-[88%] tablet:w-[95%] mx-auto text-white pb-6">
                                                Alcheringa stands against the backdrop of communal disharmony plaguing India. Through AIKYAM, we aim to foster unity and peace. Expect thought-provoking panel discussions, soul-stirring performances, and impactful fundraisers. Join us in building a harmonious future.
                                            </p>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </SplideTrack>

                        <div className="splide__arrows">
                            <button className="splide__arrow splide__arrow--prev">
                                <img src="/leftarrow.jpg" alt="Previous" className="rounded-full" />
                            </button>
                            <button className="splide__arrow splide__arrow--next" >
                                <img src="/rightarrow.jpg" alt="Next" className="rounded-full" />
                            </button>
                        </div>
                    </Splide>
                </div>
            </div>
        </div>

    );
};

export default Carasouel;