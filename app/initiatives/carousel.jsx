"use client";

import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from 'next/image'; // Import Image component from next/image

// Import images
import pic from "../../public/pic.jpg";
import leftArrow from "../../public/leftarrow.jpg";
import rightArrow from "../../public/rightarrow.jpg";

const images = [
    { src: pic, width: 600, height: 400 },
    { src: pic, width: 600, height: 400 },
    { src: pic, width: 600, height: 400 },
    { src: pic, width: 600, height: 400 },
];

const Carasouel = () => {
    return (
        <div className="w-full bg-[#201E1D] mb-2">
            <div className="w-[99%] mx-auto bg-[#F8F1DE] rounded-2xl py-10 mb-2">
                <div className="w-6/12 mx-auto">
                    <h1 className="text-[5vmax] text-center font-[thunFont]">Kartavya</h1>
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
                                        <Image
                                            src={image.src}
                                            alt=""
                                            className="pt-1 tablet:h-[40vh] small_mobile:h-[9rem] small_mobile:w-[94%] mobile:h-[11rem] small_tablet:h-[11rem] tablet:w-[98%] mx-auto border-2 border-white border-dashed rounded-[30px]"
                                            style={{ borderRadius: "30px" }}
                                            width={image.width}
                                            height={image.height}
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
                                <Image src={leftArrow} alt="Previous" className="rounded-full" width={24} height={24} />
                            </button>
                            <button className="splide__arrow splide__arrow--next">
                                <Image src={rightArrow} alt="Next" className="rounded-full" width={24} height={24} />
                            </button>
                        </div>
                    </Splide>
                </div>
            </div>
        </div>
    );
};

export default Carasouel;