import React from 'react';
import "./topSection.css";
import Image from 'next/image';
import backImg from "./background_img.jpeg";
import Image3 from "../../public/Image3.png"
import EventsCard from '../components/eventsCard';
import Carasouel from './carousel';

const topSection = ({ title = "INITIATIVES", txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, commodi. Eum odio architecto, qui est delectus, quibusdam aspernatur exercitationem ratione et placeat sequi. Adipisci quae natus quas saepe, reprehenderit, vero voluptatibus, aspernatur voluptates a reiciendis laudantium ipsam nisi! Sint, saepe." }) => {

  return (
    <>
      <div className="mobile hidden topSection pt-12 flex-col gap-4 items-center rounded-3xl mb-6">
        <div className="name_box flex justify-center items-center">
          <p>{title}</p>
        </div>
        <div className="img_box flex justify-center overflow-hidden">
          <Image
            src={backImg}
            alt='background image'
            className='small_tablet:w-full h-full'
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
      <Carasouel />
    </>
  );
}

export default topSection;