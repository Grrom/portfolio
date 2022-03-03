import "./featured_projects.scss";

import myMusicStreamer from "../../assets/my_music_streamer.png";
import lofiMoods from "../../assets/lofi_moods.png";
import { project } from "../types";

export default function FeaturedProjects() {
  const projectList: Array<project> = [
    {
      name: "My Music Streamer",
      imgSrc: myMusicStreamer,
      link: "https://jeromelalunio.tech/my-music-streamer",
      description:
        "It's a Music streamer that I made with react, You can search songs and play them, pretty straight forward.",
    },
    {
      name: "Lofi-moods",
      imgSrc: lofiMoods,
      link: "https://jeromelalunio.tech/lofi-moods",
      description:
        "An online Lofi player sorted by moods with livechat function.",
    },
  ];

  return (
    <main id="featured-projects">
      <span className="title">Featured Personal Projects</span>

      {projectList.map((item) => {
        return (
          <Project
            name={item.name}
            imgSrc={item.imgSrc}
            link={item.link}
            description={item.description}
            key={item.name}
          />
        );
      })}
    </main>
  );
}

function Project(props: project) {
  return (
    <div className="project">
      <img
        src={props.imgSrc}
        alt="MY_MUSIC_STREAMER_IMAGE"
        className="project-screenshot"
      />
      <div className="project-details">
        <div>
          <div className="project-name">{props.name}</div>
          <p className="project-description">{props.description}</p>
        </div>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Visit
        </a>
      </div>
    </div>
  );
}
