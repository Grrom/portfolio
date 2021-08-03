import "./skills.scss"

import logo from "../../assets/logo.png";

export default function Skills() {
    interface skill {
        [key: string]: Array<string>
    }

    const skillList: skill = {

        "Programming Languages": [
            "Dart", "Java", "Python",
            "JavaScript", "TypeScript", "Php",
        ],

        "Web Dev Specific": [
            "HTML", "CSS", "SCSS",
            "SASS", "Webpack",
        ],

        "Libraries and Frameworks": [
            "Flutter", "React JS", "Vue JS",
            "React Native", "BootStrap", "Tailwind CSS",
            "Express JS"
        ],

        "Others": [
            "Docker", "Github", "Git",
            "Node JS", "NoSQL", "SQL",
            "Scripting", "Linux"
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

function SkillCategory(props: { category: String, skills: Array<string> }) {
    return (
        <div>
            <div className="skill-category">
                {props.category}
            </div>
            <div className="skill-list">
                {props.skills.map((skill, i) => {
                    return <Skill skillName={skill} key={skill} />
                })}
            </div>
        </div>
    )

}

function Skill(props: { skillName: String }) {
    return (
        <main className="skill">
            <img src={logo} alt="logo" className="skill-logo" />
            <span>{props.skillName}</span>
        </main>
    )
}