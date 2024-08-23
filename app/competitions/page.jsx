import React from 'react';
import "./topSection.css";
import Image from 'next/image';
import backImg from "./background_img.jpeg";
import Image4 from "../../public/Image4.png"
import FeaturedCompetitions from '../components/competitions';
import { ModulesCard } from '../components/eventsCard';

const topSection = ({ title = "COMPETITIONS", txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, commodi. Eum odio architecto, qui est delectus, quibusdam aspernatur exercitationem ratione et placeat sequi. Adipisci quae natus quas saepe, reprehenderit, vero voluptatibus, aspernatur voluptates a reiciendis laudantium ipsam nisi! Sint, saepe." }) => {

  return (
    <>
      <div className="topSection flex flex-col items-center justify-center rounded-3xl mb-6">
        <div className="check_txt flex items-end justify-center">
          <p className='txt1'>Check Out Our</p>
        </div>
        <div className="img_box flex justify-center overflow-hidden">
          <div className="name_box absolute flex justify-center items-center">
            <p>{title}</p>
          </div>
          <Image
            src={backImg}
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
      <FeaturedCompetitions title={"Featured Competitions"} />
      <section className='featured_events_section rounded-3xl mt-[2.5vh]'>
        <div className='header_events'>
          <h2>Modules</h2>
        </div>
        <div className='flex flex-wrap p-2 gap-[10px] small_tablet:gap-5 items-center justify-center'>
          <ModulesCard title={"Pronites"} url={Image4} />
          <ModulesCard title={"Pronites"} url={Image4} />
          <ModulesCard title={"Pronites"} url={Image4} />
          <ModulesCard title={"Pronites"} url={Image4} />
          <ModulesCard title={"Pronites"} url={Image4} />
          <ModulesCard title={"Pronites"} url={Image4} />
          <ModulesCard title={"Pronites"} url={Image4} />
          <ModulesCard title={"Pronites"} url={Image4} />
          <ModulesCard title={"Pronites"} url={Image4} />
          <ModulesCard title={"Pronites"} url={Image4} />
        </div>
      </section>
    </>
  );
}

export default topSection;