import "./navbar.scss"


export default function Navbar() {
    return (
        <main >
            <NavbarItem itemName="About" />
            <NavbarItem itemName="Skills" />
            <NavbarItem itemName="Projects" />
            <NavbarItem itemName="Contact" />
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