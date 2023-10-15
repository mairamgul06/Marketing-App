
import Blog from "../marketplace/component/Blog"
import Dlex from "../marketplace/component/Dlex"
import Frequently from "../marketplace/component/Frequently"
import Home from "../marketplace/component/Home"
import Server from "../marketplace/component/Server"
import About from "../product/component/About"

function MarketPlace() {
    return (
        <div>
            <Home/>
            <About/>
            <Blog/>
            <Dlex/>
            <Frequently/>
            <Server/>
        </div>
    )
}

export default MarketPlace
