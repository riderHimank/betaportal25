import React from 'react'
import "./comp.css"
import Image from 'next/image'

// Importing images
import image1 from "../../public/Image1.png";
import image2 from "../../public/Image2.png";
import image3 from "../../public/Image3.png";
import image4 from "../../public/Image4.png";
import image5 from "../../public/Image5.png";

export default function FeaturedCompetitions({ title }) {
    return (
        <section className='featured_events_section rounded-3xl mb-[2.5vh]'>
            <div className='header_events'>
                <h2>{title}</h2>
            </div>
            <div className='grid_container thunder-subhead'>
                <div className='item1'>
                    <span>Pronites</span>
                    <Image className='img_grid'
                        src={image1}
                        alt="Pronites"
                    />
                </div>
                <div className='item2'>
                    <span>Footfall</span>
                    <Image className='img_grid'
                        src={image2}
                        alt="Footfall"
                    />
                </div>
                <div className='item3'>
                <span>Creator&apos;s Camp</span>
                    <Image className='img_grid'
                        src={image3}
                        alt="Creator's Camp"
                    />
                </div>
                <div className='item4'>
                    <span className='span_cr'>Critical Damage</span>
                    <Image className='img_grid'
                        src={image4}
                        alt="Critical Damage"
                    />                </div>
                <div className='item5'>
                    <span>Informals</span>
                    <Image className='img_grid'
                        src={image5}
                        alt="Informals"
                    />
                </div>            </div>
        </section>
    )
}