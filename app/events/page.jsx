import React from 'react';
import "./topSection.css";
import Image from 'next/image';
import backImg from "../../public/hero.png";
import backImgmobile from "../../public/hero-mobile.png";
import Image3 from "../../public/cc25.png"
import Image1 from "../../public/Image1.png"
import Image2 from "../../public/Image2.png"
import Image4 from "../../public/images/cd2.jpg"
import Image5 from "../../public/images/informals.png"
import { EventsCard } from '../components/eventsCard';

const topSection = ({ title = "EVENTS", txt = "Alcheringa has more than 80 events spread across various genres like fashion, music, art, sports, etc. They take place during the three days in which many events take place which includes panel discussions with various famous creators, informal activities like hot air balloon, ATV rides, paint ball shoot etc." }) => {

  return (
    <>
      <div className="mobile hidden topSection pt-12 flex-col gap-4 items-center rounded-3xl mb-6">
        <div className="name_box flex justify-center items-center">
          <p>{title}</p>
        </div>
        <div className="img_box flex justify-center overflow-hidden">
          <Image
            src={backImgmobile}
            alt='background image'
            className='small_tablet:w-full h-full rounded-2xl'
          />
        </div>
        <div className="overview_txt flex flex-col small_tablet:flex-row items-start justify-center mt-4">
          <div className="box_1 flex justify-center items-center">
            <p>Overview</p>
          </div>
          <div className="box_2 flex items-center">
            <p>{txt}</p>
          </div>
        </div>
      </div>
      <div className="web topSection flex flex-col items-center justify-center rounded-3xl mb-6">
        <div className="check_txt flex items-end justify-center">
          <p className='txt1'>Check Out Our</p>
        </div>
        <div className="img_box flex justify-center overflow-hidden">
          <div className="name_box absolute flex justify-center items-center">
            <p>{title}</p>
          </div>
          <Image
            src={backImg}
            alt='background image'
            className='w-full'
          />
        </div>
        <div className="overview_txt flex flex-row justify-center">
          <div className="box_1 flex justify-center items-center">
            <p>Overview</p>
          </div>
          <div className="box_2 flex items-center">
            <p>{txt}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F1DE] py-[8vh] small_tablet:py-[10vh] flex flex-col justify-center items-center gap-[2.5vh] rounded-3xl">
        <EventsCard title={"Proshows"} url={Image2} />
        <EventsCard title={"Pronites"} url={Image1} />
        <EventsCard title={"Creator's Camp"} url={Image3} />
        <EventsCard title={"Critical Damage"} url={Image4} />
        <EventsCard title={"Informals"} url={Image5} />
      </div>
    </>
  );
}

export default topSection;