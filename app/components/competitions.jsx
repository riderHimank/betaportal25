import React from 'react'
import "./comp.css"
import Image from 'next/image'

export default function FeaturedCompetitions({ title }) {
    return (
        <section className='featured_events_section rounded-3xl mb-[2.5vh]'>
            <div className='header_events'>
                <h2>{title}</h2>
            </div>
            <div className='grid_container thunder-subhead'>
                <div className='item1'>
                    <span>Pronites</span>
                    <img className='img_grid'
                        src="/image1.png"
                    />
                </div>
                <div className='item2'>
                    <span>Footfall</span>
                    <img className='img_grid'
                        src="/image2.png"
                    />
                </div>
                <div className='item3'>
                    <span>Creator's Camp</span>
                    <img className='img_grid'
                        src="/image3.png"
                    />
                </div>
                <div className='item4'>
                    <span className='span_cr'>Critical Damage</span>
                    <img className='img_grid'
                        src="/image4.png"
                    />
                </div>
                <div className='item5'>
                    <span>Informals</span>
                    <img className='img_grid'
                        src="/image5.png"
                    />
                </div>
            </div>
        </section>
    )
}
