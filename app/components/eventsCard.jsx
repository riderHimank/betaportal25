import Image from "next/image";
import "./comp.css"
export const EventsCard = ({ title, url }) => {
    return (
        <div className="w-[90%] small_tablet:w-[70%] relative ">
            <Image src={url} alt={"Loading..."} className="w-[100%] h-[25vh] small_tablet:h-[50vh] rounded-2xl" />
            <span className="spann">{title}</span>
        </div >
    );
}

export const ModulesCard = ({ title, url }) => {
    return (
        <div className="w-[100%] small_tablet:w-[23%] h-fit relative ">
            <Image src={url} alt={"Loading..."} className="w-[100%] min-h-[30vh] small_tablet:min-h-[60vh] rounded-xl" />
            <span>{title}</span>
        </div >
    );
}
