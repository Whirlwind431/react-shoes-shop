// import Brands from "./Brands/Brands";
import "./Home.css";
import Video from "./Video/Video";

// import RandomBrand from "./RandomBrand/RandomBrand";



function Home(): JSX.Element {
    return (
        <div className="Home">
            <Video />
            {/* <Brands /> */}
            {/* <RandomBrand /> */}
        </div>
    );
}

export default Home;
