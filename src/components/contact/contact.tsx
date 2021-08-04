import "./contact.scss"

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail, } from 'react-icons/md'
import { contact } from "../types"


export default function Contact() {
    const contactList: Array<contact> = [
        {
            site: "Github",
            link: "https://github.com/JeromeLalunio",
            icon: <FaGithub className="contact-icon" />
        },
        {
            site: "LinkedIn",
            link: "https://www.linkedin.com/in/jose-jerome-lalunio-1ba2541a6/",
            icon: <FaLinkedin className="contact-icon" />
        },
        {
            site: "Email",
            link: "mailto:josejeromelalunio@gmail.com:",
            icon: <MdEmail className="contact-icon" />
        }
    ]

    return (
        <main id="contact">
            <span className="title">
                Contact me
            </span>

            <div className="contact-list">
                {
                    contactList.map(item => {
                        return <ContactItem site={item.site} link={item.link} icon={item.icon} key={item.site} />
                    })
                }
            </div>
        </main>
    )
}

function ContactItem(props: contact) {
    return (
        <a
            href={props.link}
            target='_blank'
            rel="noopener noreferrer"
            className="contact-item"
        >
            {props.icon}
            {props.site}
        </a>
    )
}