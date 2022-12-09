import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import "./style/landingPage.css"
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
    return (
        <div >
            {/* Introsection */}
            <div className="myBG">
                <NavigationBar />
                <Intro/>
            </div>
            {/* End of intro */}

            {/* Trending section */}
            <div className="trending">
                <Trending/>
            </div>
            {/* end Trending */}
            <div className="dua">
                <Superhero/>
            </div>
        </div>
    );
}

export default App;