import "./featured_projects.scss"

import MyMusicStreamer from "../../assets/my_music_streamer.png"
import { project } from "../types"


export default function FeaturedProjects() {
    const projectList: Array<project> = [
        {
            name: "My Music Streamer",
            link: "https://jeromelalunio.github.io/my-music-streamer",
            description: "Aute nostrud ut deserunt et tempor aliquip id sit. Veniam commodo nulla exercitation nostrud."
        }
    ]

    return (
        <main id="featured-projects">
            <span className="title">
                Featured Projects
            </span>

            {
                projectList.map((item) => {
                    return <Project name={item.name} link={item.link} description={item.description} key={item.name} />
                })
            }
        </main>
    )
}

function Project(props: project) {
    return (
        <div className="project">
            <img src={MyMusicStreamer} alt="MY_MUSIC_STREAMER_IMAGE" className="project-screenshot" />
            <div className="project-details">
                <div>
                    <div className="project-name">
                        {props.name}
                    </div>
                    <p className="project-description">
                        {props.description}
                    </p>

                </div>
                <a href={props.link} target="_blank" rel="noreferrer" className="project-link">Visit</a>
            </div>
        </div>
    )
}