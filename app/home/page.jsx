import React from 'react'
import "./comp.css"
import Image from 'next/image'

export default function Home() {
  return (
    <div>
        <section className='featured_events_section'>
            <div className='header_events'>
                <h2>Featured Events</h2>
            </div>
            <div className='grid_container'>
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
    </div>
  )
}
