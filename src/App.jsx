import {Component} from "react";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Cards from "./components/Cards.jsx";
import Search from "./components/Search.jsx";
import Logos from "./components/Logos.jsx";
import Footer from "./components/Footer.jsx";

class App extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Banner/>
                <Cards/>
                <Search/>
                <Logos/>
                <Footer/>
            </div>
        )
    }
}

export default App;
