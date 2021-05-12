import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';

function About(){
    return (
        <div className="container-lg mx-auto my-5 overflow-auto">
        <AboutMe/>
        <Skills/>
        </div>
    )
};

export default About;