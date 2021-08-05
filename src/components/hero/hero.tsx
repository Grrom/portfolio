import "./hero.scss"

export default function Hero() {

    return (
        <main id="hero">
            <div className="sky">
                <div className="stars-small"></div>
                <div className="stars-medium"></div>
                <div className="stars-large"></div>
            </div>

            <span className="hello">
                Hello I'm JEROME
            </span>
            <p className="what-i-am">
                I'm a FullStack web and app developer
            </p>
        </main>
    )
}