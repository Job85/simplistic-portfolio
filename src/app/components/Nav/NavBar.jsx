'use client'

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Nav.module.css";
import path from "path";

const NavBar = () => {

    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
        { href: "https://github.com/Job85", label: "GitHub" },
        { href: "https://www.linkedin.com/in/julian-jernigan813/", label: "LinkedIn" },
    ]

    return (
        <nav className={styles.nav_container}>
            <ul className={styles.nav_links}>
                {links.map((link, index) => (
                    <li key={index}>
                        {link.href.startsWith("http") ? (
                            <a
                                className={`${styles.nav_link} ${pathname === link.href ? styles.active_link : ''}`}
                                href={link.href}
                                target="_blank"
                            >
                                {link.label}
                            </a>
                        ) : (
                            <Link
                                href={link.href}
                                passHref
                                className={`${styles.nav_link} ${pathname === link.href ? styles.active_link : ''}`}
                            >
                                {link.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar