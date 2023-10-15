import Blog from "../about/component/Blog";
import Contact from "../about/component/Contact";
import Help from "../about/component/Help";
import Home from "../about/component/Home";
import Ready from "../about/component/Ready";
import Tabs from "../about/component/Tabs";
function About() {
    return (
        <>
            <Home/>
            <Blog/>
            <Ready/>
            <Help/>
            <Tabs/>
            <Contact/>
        </>
    )
}

export default About
