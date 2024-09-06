import React from 'react'
import "./comp.css"
import Image from 'next/image'

// Importing images
import image1 from "../../public/Image1.png";
import image2 from "../../public/Image2.png";
import image3 from "../../public/cc25.png";
import image4 from "../../public/Image4.png";
import image5 from "../../public/Image5.png";

export default function FeaturedCompetitions({ pg = "", title, tag, t1 = "", t2 = "", t3 = "", t4 = "", t5 = "", u1 = "", u2 = "", u3 = "", u4 = "", u5 = "" }) {
    return (
        <section className='featured_events_section rounded-3xl mb-[2.5vh] '>
            <div className='header_events relative'>
                <h2 className={`tag ${pg}`}>{tag}</h2>
                <h2 className='z-[2]'>{title}</h2>
            </div>
            <div className='grid_container thunder-subhead'>
                <div className='item1'>
                    <span>{t1 !== "" ? t1 : "Pronites"}</span>
                    <Image className='img_grid'
                        src={u1 !== "" ? u1 : image1}
                        alt="Pronites"
                    />
                </div>
                <div className='item2'>
                    <span>{t2 !== "" ? t2 : "Proshows"}</span>
                    <Image className='img_grid'
                        src={u2 !== "" ? u2 : image2}
                        alt="Footfall"
                    />
                </div>
                <div className='item3'>
                    <span>{t3 !== "" ? t3 : "Creator's Camp"}</span>
                    <Image className='img_grid'
                        src={u3 !== "" ? u3 : image3}
                        alt="Creator's Camp"
                    />
                </div>
                <div className='item4'>
                    <span className='span_cr'>{t4 !== "" ? t4 : "Critical Damage"}</span>
                    <Image className='img_grid'
                        src={u4 !== "" ? u4 : image4}
                        alt="Critical Damage"
                    />                </div>
                <div className='item5'>
                    <span>{t5 !== "" ? t5 : "Informals"}</span>
                    <Image className='img_grid'
                        src={u5 !== "" ? u5 : image5}
                        alt="Informals"
                    />
                </div>
            </div>
        </section>
    )
}