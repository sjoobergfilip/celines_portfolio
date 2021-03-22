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
                <div className="grid lg:grid-cols-2 md:grid-cols-1 w-auto p-12 gap-2 flex justify-center justify-items-center   ">
                    <div className="content flex justify-center flex-col">
                        <h1 className="text-gray-900 text-6xl">
                            Industridesigner
                        </h1>
                        <p className="text-gray-900 my-5 cursive">
                            My name is Celine and I am a huge sport fan with a
                            big passion for graphics designs and new technology.
                        </p>
                    </div>
                    <div className="mt-7 flex justify-center mb-4 lg:invisible md:invisible sm:invisible visible">
                        <SocialIcon
                            url="https://www.linkedin.com/in/filip-sj%C3%B6berg-a86550140/"
                            className="mr-4"
                            target="_blank"
                            fgColor="#fff"
                            style={{ height: 50, width: 50 }}
                        />
                        <SocialIcon
                            url="https://github.com/sjoobergfilip"
                            className="mr-4"
                            target="_blank"
                            bgColor="white"
                            fgColor="black"
                            style={{ height: 50, width: 50 }}
                        />
                        <SocialIcon
                            url="https://twitter.com/sjobergfilip"
                            className="mr-4"
                            target="_blank"
                            fgColor="#fff"
                            style={{ height: 50, width: 50 }}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
