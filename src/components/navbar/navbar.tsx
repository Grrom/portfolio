import "./navbar.scss"

import logo from "../../assets/logo.png";


export default function Navbar() {
    return (
        <main className="navbar">
            <MyLogo />
            <span className="item-list">
                <NavbarItem itemName="About" />
                <NavbarItem itemName="Skills" />
                <NavbarItem itemName="Projects" />
                <NavbarItem itemName="Contact" />
            </span>
        </main>
    )
}

function NavbarItem(props: { itemName: String }) {
    return (
        <div className="navbar-item">
            {props.itemName}
        </div>
    );
}

function MyLogo() {
    return (
        <span className="my-logo">
            <img src={logo} alt="logo" className="logo" />
            <span className="logo-text">Jerome Lalunio</span>
        </span>
    )
}