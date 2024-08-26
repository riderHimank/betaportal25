import React from 'react';
import "./topSection.css";
import Image from 'next/image';
import backImg from "../../public/hero.png";
import backImgmobile from "../../public/hero-mobile.png";
import m1 from "../../public/images/c1.jpg"
import m2 from "../../public/images/c2.jpg"
import m3 from "../../public/images/c3.jpg"
import m4 from "../../public/images/c4.jpg"
import m5 from "../../public/images/c5.jpg"
import m6 from "../../public/images/c6.jpg"
import m7 from "../../public/images/c7.jpg"
import m8 from "../../public/images/c8.jpg"
import m9 from "../../public/images/art.jpg"
import m10 from "../../public/images/dd.jpg"
import m11 from "../../public/images/lca.jpg"
import f1 from "../../public/images/fc1.png"
import f2 from "../../public/images/fc2.png"
import f3 from "../../public/images/fc3.png"
import f4 from "../../public/images/fc4.png"
import f5 from "../../public/images/fc5.png"
import FeaturedCompetitions from '../components/competitions';
import { ModulesCard } from '../components/eventsCard';

const topSection = ({ title = "COMPETITIONS", txt = "Alcheringa has many competitions spread across various genres. They take place during the three days with the prize distribution on the last day. People all over the country participate in these competitions to win exciting prizes and goodies and to witness one of India's biggest cultural festival." }) => {

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
      <FeaturedCompetitions title={"Featured Competitions"}
        t1='Parliamentary Debate'
        t3='Haute Couture'
        t2='Electric Heels'
        t4='Rocko-Phonix'
        t5='Step Up'
        u1={f3}
        u3={f5}
        u2={f4}
        u4={f2}
        u5={f1}
      />
      <section className='modules_section rounded-3xl mt-[2.5vh]'>
        <div className='header_events'>
          <h2>Modules</h2>
        </div>
        <div className='grid grid-cols-2 small_tablet:flex small_tablet:flex-wrap p-4 gap-[10px] small_tablet:gap-5 small_tablet:items-center justify-center'>
          <ModulesCard title={"Vogue Nation"} url={m1} />
          <ModulesCard title={"Class Apart"} url={m2} />
          <ModulesCard title={"Sports"} url={m3} />
          <ModulesCard title={"Music"} url={m4} />
          <ModulesCard title={"Dance"} url={m5} />
          <ModulesCard title={"Quiz"} url={m6} />
          <ModulesCard title={"Drama"} url={m7} />
          <ModulesCard title={"Literary"} url={m8} />
          <ModulesCard title={"Art Talkies"} url={m9} />
          <ModulesCard title={"Digital Dexterity"} url={m10} />
          <ModulesCard title={"Lights Camera Action"} url={m11} />
        </div>
      </section>
    </>
  );
}

export default topSection;