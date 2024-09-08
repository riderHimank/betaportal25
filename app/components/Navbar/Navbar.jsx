"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import logo from "../../../public/Frame.svg";

const montserrat = Montserrat({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

function Navbar() {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;
    const [menuOpen, setMenuOpen] = useState(false);
    const [programOpen, setProgramOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleProgramDropdown = () => {
        setProgramOpen(!programOpen);
    };

    // Toggle no-scroll class when menuOpen state changes
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add(`${styles.noscroll}`);
        } else {
            document.body.classList.remove(`${styles.noscroll}`);
        }
    }, [menuOpen]);

    return (
        <div className="sticky top-0 z-50">
            <nav className={`flex justify-between w-full py-3 px-10 main ${styles.bg1} text-white items-center ${styles.textcolor1}`}>
                <Link href="/">
                    <div className="leftlogo flex gap-1 items-center">
                        <Image src={logo} alt="" className="logo w-10" />
                        <h1 className={`${styles.heading} ${styles.textcolor1}`}>ALCHERINGA</h1>
                    </div>
                </Link>
                <div className="right">
                    <button className={styles.hamburger} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    <ul className={`${styles.navlinks} flex gap-8`}>
                        <li>
                            <Link href="/" className={`nav-link ${isActive('/') ? `${styles.under} font-semibold` : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/competitions" className={`nav-link ${isActive('/competitions') ? `${styles.under} font-semibold` : ''}`}>
                                Competitions
                            </Link>
                        </li>
                        <li>
                            <Link href="/events" className={`nav-link ${isActive('/events') ? `${styles.under} font-semibold` : ''}`}>
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link href="/kartavya" className={`nav-link ${isActive('/kartavya') ? `${styles.under} font-semibold` : ''}`}>
                                Kartavya
                            </Link>
                        </li>
                        <li>
                            <Link href="https://iitgmun.alcheringa.in/" className={`nav-link`}>
                                MUN
                            </Link>
                        </li>
                        <li className={`${styles.dropdown} ${programOpen ? `${styles.activeDropdown}` : ''}`}>
                            <Link href="#" className={`nav-link`} onClick={toggleProgramDropdown}>
                                Programs
                            </Link>
                            {programOpen && (
                                <ul className={styles.dropdownMenu}>
                                    <li>
                                        <Link href="https://ambassador.alcheringa.in" className={`nav-link`}>
                                            Campus Ambassador
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="#" className={`nav-link`}>
                                            City Elimination
                                        </Link>
                                    </li> */}
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link href="/team" className={`nav-link ${isActive('/team') ? `${styles.under} font-semibold` : ''}`}>
                                Team
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="#" className={`nav-link`}>
                                Register
                            </Link>
                        </li> */}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${menuOpen ? `${styles.active}` : ""}`}>
                    <ul>
                        <li className={`${styles.navlink}`}>
                            <Link href="/" onClick={toggleMenu} className={` ${isActive('/') ? `${styles.under} font-semibold` : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li className={`${styles.navlink}`}>
                            <Link href="/competitions" onClick={toggleMenu} className={` ${isActive('/competitions') ? `${styles.under} font-semibold` : ''}`}>
                                Competitions
                            </Link>
                        </li>
                        <li className={`${styles.navlink}`}>
                            <Link href="/events" onClick={toggleMenu} className={` ${isActive('/events') ? `${styles.under} font-semibold` : ''}`}>
                                Events
                            </Link>
                        </li>
                        <li className={`${styles.navlink}`}>
                            <Link href="/kartavya" onClick={toggleMenu} className={` ${isActive('/kartavya') ? `${styles.under} font-semibold` : ''}`}>
                                Kartavya
                            </Link>
                        </li>
                        <li className={`${styles.navlink}`}>
                            <Link href="https://iitgmun.alcheringa.in/" onClick={toggleMenu} className={`${styles.navlink}`}>
                                MUN
                            </Link>
                        </li>
                        <li className={`${styles.navlink}`}>
                            <Link href="https://ambassador.alcheringa.in" onClick={toggleMenu} className={`${styles.navlink}`}>
                                Campus Ambassador
                            </Link>
                        </li>
                        <li className={`${styles.navlink}`}>
                            <Link href="/team" onClick={toggleMenu} className={` ${isActive('/team') ? `${styles.under} font-semibold` : ''}`}>
                                Team
                            </Link>
                        </li>
                        {/* <li className={`${styles.navlink}`}>
                            <Link href="/register" onClick={toggleMenu} className={`${styles.navlink}`}>
                                Register
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;