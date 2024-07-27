import "./skills.scss";

import dartLogo from "../../assets/skills/dart.svg";
import javaLogo from "../../assets/skills/java.svg";
import pythonLogo from "../../assets/skills/python.svg";
import javascriptLogo from "../../assets/skills/javascript.svg";
import typescriptLogo from "../../assets/skills/typescript.svg";
import phpLogo from "../../assets/skills/php.svg";
import csharp from "../../assets/skills/csharp.svg";
import shell from "../../assets/skills/shell.svg";
import lua from "../../assets/skills/lua.svg";
import golang from "../../assets/skills/golang.svg";

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

import gcp from "../../assets/skills/gcp.svg";
import dockerLogo from "../../assets/skills/docker.svg";
import gitLogo from "../../assets/skills/git.svg";
import nodeJsLogo from "../../assets/skills/nodejs.svg";
import firebaseLogo from "../../assets/skills/firebase.svg";
import graphqlLogo from "../../assets/skills/graphql.svg";
import mongodb from "../../assets/skills/mongodb.svg";
import azureDevops from "../../assets/skills/azureDevops.svg";
import fhir from "../../assets/skills/fhir.svg";

import { skill } from "../types";

export default function Skills() {
  const skillList: skill = {
    "Programming/Scripting Languages": [
      { name: "Dart", icon: dartLogo },
      { name: "Java", icon: javaLogo },
      { name: "Python", icon: pythonLogo },
      { name: "JavaScript", icon: javascriptLogo },
      { name: "Typescript", icon: typescriptLogo },
      { name: "Php", icon: phpLogo },
      { name: "C#", icon: csharp },
      { name: "Shell", icon: shell },
      { name: "Lua", icon: lua },
      { name: "Golang", icon: golang },
    ],

    "Web Dev Specific": [
      { name: "HTML", icon: htmlLogo },
      { name: "CSS", icon: cssLogo },
      { name: "SASS / SCSS", icon: sassLogo },
      { name: "Webpack", icon: webpackLogo },
    ],

    "Libraries and Frameworks": [
      { name: "Flutter", icon: flutterLogo },
      { name: "React JS", icon: reactJsLogo },
      { name: "Vue JS", icon: vueJsLogo },
      { name: "React Native", icon: reactJsLogo },
      { name: "BootStrap", icon: bootstrapLogo },
      { name: "Tailwind CSS", icon: tailwindLogo },
      { name: "Express JS", icon: expressLogo },
    ],

    Others: [
      { name: "Google Cloud Platform", icon: gcp },
      { name: "Docker", icon: dockerLogo },
      { name: "Azure Devops", icon: azureDevops },
      { name: "Git", icon: gitLogo },
      { name: "Node JS", icon: nodeJsLogo },
      { name: "SQL", icon: "" },
      { name: "NoSQL", icon: "" },
      { name: "Firebase", icon: firebaseLogo },
      { name: "Graphql", icon: graphqlLogo },
      { name: "MongoDB", icon: mongodb },
      { name: "FHIR", icon: fhir },
    ],
  };

  return (
    <main id="skills">
      <div className="title">Skills</div>
      {Object.keys(skillList).map((key) => {
        return (
          <SkillCategory category={key} skills={skillList[key]} key={key} />
        );
      })}
    </main>
  );
}

function SkillCategory(props: {
  category: String;
  skills: Array<{ [skill: string]: string }>;
}) {
  return (
    <div>
      <div className="skill-category">{props.category}</div>
      <div className="skill-list">
        {props.skills.map((skill, i) => {
          return (
            <Skill skillName={skill.name} icon={skill.icon} key={skill.name} />
          );
        })}
      </div>
    </div>
  );
}

function Skill(props: { skillName: String; icon: string }) {
  return (
    <main className="skill">
      <img src={props.icon} alt="" className="skill-logo" />
      <span>{props.skillName}</span>
    </main>
  );
}
