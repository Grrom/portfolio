import "./skills.scss"

import dartLogo from "../../assets/skills/dart.svg";
import javaLogo from "../../assets/skills/java.svg";
import pythonLogo from "../../assets/skills/python.svg";
import javascriptLogo from "../../assets/skills/javascript.svg";
import typescriptLogo from "../../assets/skills/typescript.svg";
import phpLogo from "../../assets/skills/php.svg";

import htmlLogo from "../../assets/skills/html.svg";
import cssLogo from "../../assets/skills/css.svg";
import sassLogo from "../../assets/skills/sass.svg";
import webpackLogo from "../../assets/skills/webpack.svg";

import vueJsLogo from "../../assets/skills/vuejs.svg";
import reactJsLogo from "../../assets/skills/reactjs.svg";
import flutterLogo from "../../assets/skills/flutter.svg";
import bootstrapLogo from "../../assets/skills/bootstrap.svg";
import tailwindLogo from "../../assets/skills/tailwind.svg";
import expressLogo from "../../assets/skills/express.svg";

import dockerLogo from "../../assets/skills/docker.svg";
import githubLogo from "../../assets/skills/github.svg";
import gitLogo from "../../assets/skills/git.svg";
import nodeJsLogo from "../../assets/skills/nodejs.svg";
import firebaseLogo from "../../assets/skills/firebase.svg";
import restLogo from "../../assets/skills/rest.svg";
import graphqlLogo from "../../assets/skills/graphql.svg";

import { skill } from "../types";

export default function Skills() {

    const skillList: skill = {

        "Programming Languages": [
            { name: "Dart", icon: dartLogo }, { name: "Java", icon: javaLogo }, { name: "Python", icon: pythonLogo },
            { name: "JavaScript", icon: javascriptLogo }, { name: "Typescript", icon: typescriptLogo }, { name: "Php", icon: phpLogo },
        ],

        "Web Dev Specific": [
            { name: "HTML", icon: htmlLogo }, { name: "CSS", icon: cssLogo }, { name: "SASS / SCSS", icon: sassLogo },
            { name: "Webpack", icon: webpackLogo }
        ],

        "Libraries and Frameworks": [
            { name: "Flutter", icon: flutterLogo }, { name: "React JS", icon: reactJsLogo }, { name: "Vue JS", icon: vueJsLogo },
            { name: "React Native", icon: reactJsLogo }, { name: "BootStrap", icon: bootstrapLogo }, { name: "Tailwind CSS", icon: tailwindLogo },
            { name: "Express JS", icon: expressLogo }
        ],

        "Others": [
            { name: "Docker", icon: dockerLogo }, { name: "Github", icon: githubLogo }, { name: "Git", icon: gitLogo },
            { name: "Node JS", icon: nodeJsLogo }, { name: "SQL", icon: "" }, { name: "NoSQL", icon: "" },
            { name: "Firebase", icon: firebaseLogo }, { name: "REST api", icon: restLogo }, { name: "Graphql", icon: graphqlLogo }
        ]
    }

    return (
        <main id="skills">
            <div className="title">
                Skills
            </div>
            {
                Object.keys(skillList).map((key) => {
                    return <SkillCategory category={key} skills={skillList[key]} key={key} />
                })
            }
        </main>
    )
}

function SkillCategory(props: { category: String, skills: Array<{ [skill: string]: string }> }) {
    return (
        <div>
            <div className="skill-category">
                {props.category}
            </div>
            <div className="skill-list">
                {props.skills.map((skill, i) => {
                    return <Skill skillName={skill.name} icon={skill.icon} key={skill.name} />
                })}
            </div>
        </div>
    )

}

function Skill(props: { skillName: String, icon: string }) {
    return (
        <main className="skill">
            <img src={props.icon} alt="" className="skill-logo" />
            <span>{props.skillName}</span>
        </main>
    )
}