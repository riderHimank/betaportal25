"use client";

import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from 'next/image'; // Import Image component from next/image

// Import images
import im1 from "../../public/pics/ini-1.png"
import im2 from "../../public/pics/ini-2.png"
import im3 from "../../public/pics/ini-3.png"
import im4 from "../../public/pics/ini-4.png"
import im5 from "../../public/pics/ini-5.png"
import san from "../../public/pics/sanrakshan.png"
import ness from "../../public/pics/ness.png"
import nexpo from "../../public/pics/NEU.png"
import leftArrow from "../../public/leftarrow.jpg";
import rightArrow from "../../public/rightarrow.jpg";

const images = [
    { head: "SafHer", src: im3, width: 600, height: 400, txt: "SafHer is an Alcheringa campaign focused on women's safety, upliftment, and empowerment. While women have broken barriers in various fields, they often still face danger in their daily lives. SafHer encourages women to speak out, hold perpetrators accountable, and build a society where they can live confidently and freely, realizing their full potential." },
    { head: "Udaan", src: im5, width: 600, height: 400, txt: "Udaan, originally known as \"Bachpan\" since 2011, is a social initiative by IIT Guwahati students aimed at uplifting underprivileged children. Through educational workshops, innovative programs, and motivational activities, students from IIT Guwahati and other colleges dedicate their time during vacations to inspire and support children from orphanages, villages, and slums, helping them realize their potential and dreams." },
    { head: "Prithvi", src: im2, width: 600, height: 400, txt: "Project Prithvi by Team Alcheringa aims to raise awareness about climate change and encourage individual actions that positively impact the environment. By educating people through engaging activities, the campaign emphasizes the importance of personal responsibility in the fight against climate change, promoting a simpler lifestyle to help protect our planet." },
    { head: "North East Expo", src: nexpo, width: 600, height: 400, txt: "North East Expo is conducted every year to promote the cultural diversity of North East India through performances and showcasing its regional art and handicraft forms" },
    { head: "NESS", src: ness, width: 600, height: 400, txt: "Innovation, strategisation and problem solving for social benefit is the very core of North East Social Summit. Every year, this campaign provides a platform to discuss the socio-political and cultural issues specific to North East India." },
    { head: "Sanrakshan", src: san, width: 600, height: 400, txt: "Sanrakshan is a dual-purpose campaign tackling AIDS awareness and substance abuse. Through workshops, it eliminates AIDS stigma and promotes safe practices." },
    { head: "Manshakti", src: im1, width: 600, height: 400, txt: "Manshakti is a mental health awareness and wellness campaign by Alcheringa, IIT Guwahati, aimed at supporting those struggling during the global pandemic. The campaign focused on empathizing with individuals suffering from mental health issues and appreciating healthcare workers battling COVID-19. Manshakti collected and sent messages of encouragement from the public to frontline doctors and staff, offering them support and motivation during this challenging time." },
    { head: "Aikyam", src: im4, width: 600, height: 400, txt: "Alcheringa stands against the backdrop of communal disharmony plaguing India. Through AIKYAM, we aim to foster unity and peace. Expect thought-provoking panel discussions, soul-stirring performances, and impactful fundraisers. Join us in building a harmonious future." },
];

const Carasouel = () => {
    return (
        <div className="w-full bg-[#201E1D] mb-2">
            <div className="w-[99%] mx-auto bg-[#F8F1DE] rounded-2xl py-10 mb-2">
                <div className="w-6/12 mx-auto">
                    <h1 className="text-[5vmax] text-center font-[thunFont]">Kartavya</h1>
                    <p className="text-center text-[1.6vmax] mt-4 font-dm-sans font-medium">
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
                                        <p className="text-[2.5vmax] text-center font-[thunFont] text-white absolute top-[135px] small_tablet:top-[250px] left-[50%] translate-x-[-50%]" >{image.head}</p>
                                        <div>
                                            <p className="text-[1.5vmax] font-dm-sans font-normal small_mobile:w-[88%] tablet:w-[95%] mx-auto text-white pb-6">
                                                {image.txt}
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