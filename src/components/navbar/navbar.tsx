import "./navbar.scss"

import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-scroll";


export default function Navbar() {
    const [showSidenav, toggleSidenav] = useState(false)

    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {

        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar")!.style.top = "0";
        } else {
            document.getElementById("navbar")!.style.top = "-5em";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <main id="navbar">
            <MyLogo />

            <GiHamburgerMenu className="hamburger-button" onClick={() => toggleSidenav(true)} />

            <SidebarNav showSidenav={showSidenav} toggleSidenav={toggleSidenav} />

            <NavbarItems />
        </main>
    )
}

function SidebarNav(props: { showSidenav: boolean, toggleSidenav: Function }) {
    return (
        <div className={props.showSidenav ? "sidebar-nav toggled" : "sidebar-nav"} >
            <div className="close-sidenav" onClick={() => props.toggleSidenav(false)}>
                <AiOutlineCloseCircle />
            </div>

            <NavbarItems />
        </div>
    )
}

function NavbarItems() {
    return (
        <span className="item-list">
            <NavbarItem itemName="About" link="about" />
            <NavbarItem itemName="Skills" link="skills" />
            <NavbarItem itemName="Projects" link="featured-projects" />
            <NavbarItem itemName="Contact" link="contact" />
        </span>
    )
}

function NavbarItem(props: { itemName: String, link: string }) {
    return (
        <Link
            className="navbar-item"
            activeClass="active"
            to={props.link}
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
        >
            {props.itemName}
        </Link>
    );
}

function MyLogo() {
    return (
        <Link
            to={"hero"}
            offset={-50}
            spy={true}
            smooth={true}
            duration={500}
            className="my-logo">
            <img src={logo} alt="logo" className="logo" />
            <span className="logo-text">Jerome Lalunio</span>
        </Link>
    )
}