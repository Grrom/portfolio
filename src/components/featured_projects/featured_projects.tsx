import "./featured_projects.scss";

import lofiMoods01 from "../../assets/lofi_moods/01.png";
import lofiMoods02 from "../../assets/lofi_moods/02.png";
import lofiMoods03 from "../../assets/lofi_moods/03.png";
import myMusicStreamer01 from "../../assets/my_music_streamer/01.png";
import myMusicStreamer02 from "../../assets/my_music_streamer/02.png";
import myMusicStreamer03 from "../../assets/my_music_streamer/03.png";
import { project } from "../types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function FeaturedProjects() {
  const personalProjectList: Array<project> = [
    {
      name: "My Music Streamer",
      imgSrc: [myMusicStreamer01, myMusicStreamer02, myMusicStreamer03],
      link: "https://grrom.github.io/my-music-streamer",
      description:
        "It's a Music streamer that I made with react, You can search songs and play them, pretty straight forward.",
      alt: "MY_MUSIC_STREAMER_IMAGE",
    },
    {
      name: "Lofi-moods",
      imgSrc: [lofiMoods01, lofiMoods02, lofiMoods03],
      link: "https://grrom.github.io/lofi-moods",
      description:
        "An online Lofi player sorted by moods with livechat function.",
      alt: "LOFI_MOODS_IMAGE",
    },
  ];

  return (
    <main id="featured-projects">
      <span className="title">Featured Personal Projects</span>

      {personalProjectList.map((item) => {
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
      {/* <img src={props.imgSrc} alt={props.alt} className="project-screenshot" /> */}
      <Carousel showArrows={false}>
        {props.imgSrc.map((imgSrc, index) => (
          <div>
            <img
              key={index}
              src={imgSrc}
              alt={imgSrc}
              className="project-screenshot"
            />
          </div>
        ))}
      </Carousel>
      <div className="project-details">
        <div>
          <div className="project-name">{props.name}</div>
          <p className="project-description">{props.description}</p>
        </div>
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
  );
}
