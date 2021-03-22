import "./home.css";
import { SocialIcon } from "react-social-icons";
import backgroundVideo from "./bg_mov.mp4";
const Home = () => {
    return (
        <>
            <video className="videoTag" autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <main className="container-home lg:px-14">
                <div className="content absolute left-20 bottom-80 max-w-full">
                    <h1 className="text-gray-900 text-6xl uppercase font-space heading max-w-full">
                        Industridesigner
                    </h1>
                    <p className="text-gray-900 my-5 cursive">
                        My name is Celine and I am a huge sport fan with a big
                        passion for graphics designs and new technology.
                    </p>
                </div>
            </main>
        </>
    );
};

export default Home;
