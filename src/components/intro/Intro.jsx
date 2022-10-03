import './intro.scss'
import Typical from 'react-typical'

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="images/me_code.png" alt="Harrison Gagnon" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, I'm</h2>
                    <h1>Harrison Gagnon</h1>
                    <h2>
                        <Typical
                        loop={1}
                        steps={[
                            'Software developer 👨‍💻'
                        ]}
                        />
                    </h2>
                </div>
                <a href="#portfolio">
                    <span class="material-icons">expand_more</span>
                </a>
            </div>
        </div>
    )
}
