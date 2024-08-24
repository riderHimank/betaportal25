import React from 'react';
import styles from "./footer.module.css";
import Image from 'next/image';
import phone from "../../../public/phone.svg";
import logo from "../../../public/alcherlogo.svg"
import linkedin from "../../../public/linkedin.svg";
import insta from "../../../public/instagram.svg";
import fb from "../../../public/facebook.svg";
import twitter from "../../../public/twitter.svg";
import youtube from "../../../public/youtube.svg";

function Footer() {
    return (
        <>
            <div className={`${styles.footer} p-12 ${styles.bg} ${styles.textcolor1} `} >
                <div className={`${styles.container1} flex justify-between px-16 text-xl relative`}>
                    <div className={`${styles.contacts} flex gap-10`}>
                        <div className="contact1 ">
                            <div className={`${styles.name} text-2xl`}>Sudhanshu Raj</div>
                            <div className={`${styles.por} my-2.5`}>PR Head</div>
                            <div className="phone flex">
                                <Image src={phone} alt="" className={`${styles.phone}  w-3`} />
                                +91 82929 67325</div>
                        </div>
                        <div className="contact2">
                            <div className="name text-2xl">Siddharth Shukla</div>
                            <div className="por my-2.5">PR Head</div>
                            <div className="phone flex">
                                <Image src={phone} alt="" className='w-3' />
                                +91 73546 47811</div>
                        </div>
                    </div>
                    <div className={`${styles.right} h-full`}>
                        <div className={`${styles.email} text-right`}>
                            <p className="abemail opacity-60">For business related queries</p>
                            <div className="mail">alcheringa@iitg.ac.in</div>
                        </div>
                        {/* <p className="abshare">Follow us on</p> */}
                        <div className={`${styles.social} flex gap-3 justify-end mt-4`}>
                            <div className={`flex gap-3`}>

                                <a href="https://www.linkedin.com/company/alcheringaiitguwahati/mycompany/" className="linkedin">
                                    <Image src={linkedin} alt="" className={`h-6 ${styles.sharelogo}`} />
                                </a>
                                <a href="https://www.instagram.com/alcheringaiitg/" className="insta">
                                    <Image src={insta} alt="" className={`h-6 ${styles.sharelogo}`} />
                                </a>
                                <a href="https://www.facebook.com/alcheringaiitg" className="fb">
                                    <Image src={fb} alt="" className={`h-6 ${styles.sharelogo}`} />
                                </a>
                            </div>
                            <div className={`flex gap-3`}>

                                <a href="https://twitter.com/alcheringaiitg" className="twitter">
                                    <Image src={twitter} alt="" className={`h-6 ${styles.sharelogo}`} />
                                </a>
                                <a href="https://www.youtube.com/c/AlcheringaIITG" className="youtube">
                                    <Image src={youtube} alt="" className={`h-6 ${styles.sharelogo}`} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container2 logo">
                    <Image src={logo} alt="" className={`mx-auto sm:mt-12 sm:mb-5 ${styles.logo}`} />
                </div>
                <div className='w-full text-center text-gray-400 mt-6 text-[2vmin]'>
                    <p>Designed by Team Creatives. Developed by Team Web Operations.</p>
                </div>
            </div>
        </>
    )
}
export default Footer;