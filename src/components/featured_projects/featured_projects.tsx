import "./featured_projects.scss";

import lofiMoods01 from "../../assets/lofi_moods/01.png";
import lofiMoods02 from "../../assets/lofi_moods/02.png";
import lofiMoods03 from "../../assets/lofi_moods/03.png";

import myMusicStreamer01 from "../../assets/my_music_streamer/01.png";
import myMusicStreamer02 from "../../assets/my_music_streamer/02.png";
import myMusicStreamer03 from "../../assets/my_music_streamer/03.png";

import boilingWaters01 from "../../assets/boiling_waters/01.png";
import boilingWaters02 from "../../assets/boiling_waters/02.png";
import boilingWaters03 from "../../assets/boiling_waters/03.png";
import boilingWaters05 from "../../assets/boiling_waters/05.png";
import boilingWaters06 from "../../assets/boiling_waters/06.png";
import boilingWaters07 from "../../assets/boiling_waters/07.png";
import boilingWaters09 from "../../assets/boiling_waters/09.png";
import boilingWaters10 from "../../assets/boiling_waters/10.png";
import boilingWaters11 from "../../assets/boiling_waters/11.png";
import boilingWaters12 from "../../assets/boiling_waters/12.png";

import mrPaws01 from "../../assets/mr_paws/01.png";
import mrPaws02 from "../../assets/mr_paws/02.png";
import mrPaws03 from "../../assets/mr_paws/03.png";
import mrPaws04 from "../../assets/mr_paws/04.png";
import mrPaws05 from "../../assets/mr_paws/05.png";
import mrPaws06 from "../../assets/mr_paws/06.png";
import mrPaws07 from "../../assets/mr_paws/07.png";
import mrPaws08 from "../../assets/mr_paws/08.png";
import mrPaws09 from "../../assets/mr_paws/09.png";
import mrPaws10 from "../../assets/mr_paws/10.png";
import mrPaws11 from "../../assets/mr_paws/11.png";
import mrPaws12 from "../../assets/mr_paws/12.png";
import mrPaws13 from "../../assets/mr_paws/13.png";
import mrPaws14 from "../../assets/mr_paws/14.png";
import mrPaws15 from "../../assets/mr_paws/15.png";
import mrPaws16 from "../../assets/mr_paws/16.png";

import printerMonitoring01 from "../../assets/printer_monitoring/01.png";
import printerMonitoring02 from "../../assets/printer_monitoring/02.png";
import printerMonitoring03 from "../../assets/printer_monitoring/03.png";
import printerMonitoring04 from "../../assets/printer_monitoring/04.png";
import printerMonitoring05 from "../../assets/printer_monitoring/05.png";
import printerMonitoring06 from "../../assets/printer_monitoring/06.png";

import umed00 from "../../assets/umed/00.png";
import umed01 from "../../assets/umed/01.png";
import umed02 from "../../assets/umed/02.png";
import umed03 from "../../assets/umed/03.png";
import umed04 from "../../assets/umed/04.png";
import umed05 from "../../assets/umed/05.png";
import umed06 from "../../assets/umed/06.png";
import umed07 from "../../assets/umed/07.png";
import umed08 from "../../assets/umed/08.png";
import umed09 from "../../assets/umed/09.png";
import umed10 from "../../assets/umed/10.png";
import umed11 from "../../assets/umed/11.png";
import umed12 from "../../assets/umed/12.png";
import umed13 from "../../assets/umed/13.png";
import umed14 from "../../assets/umed/14.png";
import umed15 from "../../assets/umed/15.png";
import umed16 from "../../assets/umed/16.png";
import umed17 from "../../assets/umed/17.png";
import umed18 from "../../assets/umed/18.png";

import { project } from "../types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function FeaturedProjects() {
  const projectsForClients: Array<project> = [
    {
      name: "Boiling waters",
      imgSrc: [
        boilingWaters01,
        boilingWaters02,
        boilingWaters03,
        boilingWaters05,
        boilingWaters06,
        boilingWaters07,
        boilingWaters09,
        boilingWaters10,
        boilingWaters11,
        boilingWaters12,
      ],
      link: "https://play.google.com/store/apps/details?id=ph.boilingwatersph.bdub&hl=en&gl=US",
      description:
        "It's a Dating app where users are able to use more advanced customized filters than other dating apps. Users can select from lists of their interests and their moral compass and they can set their non-negotiables and negotiables too.",
      alt: "BOILING_WATERS_IMAGE",
    },
    {
      name: "Mr. Paws",
      imgSrc: [
        mrPaws01,
        mrPaws02,
        mrPaws03,
        mrPaws04,
        mrPaws05,
        mrPaws06,
        mrPaws07,
        mrPaws08,
        mrPaws09,
        mrPaws10,
        mrPaws11,
        mrPaws12,
        mrPaws13,
        mrPaws14,
        mrPaws15,
        mrPaws16,
      ],
      description:
        "It's a grooming service booking app where customers can book grooming services, playcation and staycations for their pets. The app also has a feature that allows customers to track their pets' grooming progress.",
      alt: "MR_PAWS_IMAGE",
    },
    {
      name: "Umed Telemedicine",
      imgSrc: [
        umed00,
        umed01,
        umed02,
        umed03,
        umed04,
        umed05,
        umed06,
        umed07,
        umed08,
        umed09,
        umed10,
        umed11,
        umed12,
        umed13,
        umed14,
        umed15,
        umed16,
        umed17,
        umed18,
      ],
      description:
        "A telemedicine app that allows patients to book appointments with doctors and have video consultations with them. It also has a feature that allows patients to order medicines and have them delivered to their homes or they can pickup their prescribed medications from their local pharmacy.",
      alt: "UMED_TELEMEDICINE_IMAGE",
      link: "https://apps.apple.com/jp/app/umed-healthcare/id1586528141?l=en-US",
    },

    {
      name: "3D Printer monitoring",
      imgSrc: [
        printerMonitoring01,
        printerMonitoring02,
        printerMonitoring03,
        printerMonitoring04,
        printerMonitoring05,
        printerMonitoring06,
      ],
      description:
        "A project used to monitor 3d printers in a network and control them remotely.",
      alt: "PRINTER_MONITORING_IMAGE",
    },
  ];

  const personalProjects: Array<project> = [
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
      <ProjectsWrapper
        projects={projectsForClients}
        title="Previous Clients"
        className="mobile-projects-wrapper"
      />
      <ProjectsWrapper
        projects={personalProjects}
        title="Personal Projects"
        className="web-projects-wrapper"
      />
    </main>
  );
}

function ProjectsWrapper(props: {
  projects: Array<project>;
  title: string;
  className: string;
}) {
  return (
    <div>
      <span className="title">{props.title}</span>
      <div className={props.className}>
        {props.projects.map((item) => {
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
      </div>
    </div>
  );
}

function Project(props: project) {
  return (
    <div className="project">
      <Carousel showArrows={true} showThumbs={false}>
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
      {props.link ? (
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Visit
        </a>
      ) : (
        <div className="no-link">No link available</div>
      )}
    </div>
  );
}
