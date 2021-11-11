import "./navbar.scss"

import logo from "../../assets/logo.png";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useEffect, useState} from "react";
import {Link} from "react-scroll";
import {debounce} from "../../helper";


export default function Navbar() {
  const [showSidenav, toggleSidenav] = useState(false)

  const [previousPos, setPreviousPos] = useState(0)

  const handleScroll = debounce(() => {
    const currentPos = window.pageYOffset;
    document.getElementById('navbar')!.style.top = previousPos! - currentPos > 70 ? '0' : '-5em';
    setPreviousPos(() => window.pageYOffset);
  }, 60);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [previousPos, handleScroll]);

  return (
    <main id="navbar">
      <MyLogo />

      <a href="https://hits.seeyoufarm.com" className="display-none"><img alt="hits" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjeromelalunio.tech&count_bg=%23007AE6&title_bg=%23555555&icon=linux.svg&icon_color=%23E7E7E7&title=portfolio+views&edge_flat=false" /></a>

      <GiHamburgerMenu className="hamburger-button" onClick={() => toggleSidenav(true)} />

      <SidebarNav showSidenav={showSidenav} toggleSidenav={toggleSidenav} />

      <NavbarItems />
    </main>
  )
}

function SidebarNav(props: {showSidenav: boolean, toggleSidenav: Function}) {
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

function NavbarItem(props: {itemName: String, link: string}) {
  return (
    <Link
      className="navbar-item"
      activeClass="active-nav-item"
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
