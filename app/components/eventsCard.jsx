import Image from "next/image";

export const EventsCard = ({ title, url }) => {
    return (
        <div className="w-[70%] h-fit relative ">
            <Image src={url} alt={"Loading..."} className="w-[100%] rounded-2xl" />
            <span style={{
                "position": "absolute",
                "color": "white",
                "bottom": 0,
                "textAlign": "center",
                "font-family": "Franklin Gothic Medium",
                "font-size": "1.5vw",
                "width": "100%",
            }}>{title}</span>
        </div >
    );
}

export const ModulesCard = ({ title, url }) => {
    return (
        <div className="w-[30%] small_tablet:w-[23%] h-fit relative ">
            <Image src={url} alt={"Loading..."} className="w-[100%] rounded-xl" />
            <span style={{
                "position": "absolute",
                "color": "white",
                "bottom": 0,
                "textAlign": "center",
                "font-family": "Franklin Gothic Medium",
                "font-size": "1.5vw",
                "width": "100%",
            }}>{title}</span>
        </div >
    );
}
