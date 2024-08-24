import Image from "next/image";
import "./comp.css"
export const EventsCard = ({ title, url }) => {
    return (
        <div className="w-[90%] small_tablet:w-[70%] h-fit relative ">
            <Image src={url} alt={"Loading..."} className="w-[100%] rounded-2xl" />
            <span className="spann">{title}</span>
        </div >
    );
}

export const ModulesCard = ({ title, url }) => {
    return (
        <div className="w-[100%] small_tablet:w-[23%] h-fit relative ">
            <Image src={url} alt={"Loading..."} className="w-[100%] rounded-xl" />
            <span>{title}</span>
        </div >
    );
}
