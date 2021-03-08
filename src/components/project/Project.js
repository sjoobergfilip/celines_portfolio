import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import { Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "../loader/Loader";
import "./Project.css";

const Project = () => {
    const [projectData, setProjectData] = useState(null);
    const [filterData, setFilterData] = useState(null);
    const [activeAll, setActiveAll] = useState(true);
    const [activeUx, setActiveUx] = useState(false);
    const [activeWallpaper, setActiveWallpaper] = useState(false);
    const [activeIndustridesign, setActiveActiveIndustridesign] = useState(
        false
    );

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"]{
              title,
              date,
              place,
              shortDescription,
              projectType,
              link,
              tags,
              slug,
              filtertype,
              imagesGallery,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
          }`
            )
            .then((data) => {
                setProjectData(data);
                setFilterData(data);
            })
            .catch(console.error);
    }, []);

    const filterAll = () => {
        setActiveAll(true);
        setActiveUx(false);
        setActiveWallpaper(false);
        setActiveActiveIndustridesign(false);
        setFilterData(projectData);
    };
    const filterUx = () => {
        setActiveAll(false);
        setActiveUx(true);
        setActiveWallpaper(false);
        setActiveActiveIndustridesign(false);
        const filteredArray = projectData.filter((item) => {
            if (item.filtertype === "uxDesign") {
                return item;
            }
        });
        setFilterData(filteredArray);
    };
    const filterWallpaper = () => {
        setActiveAll(false);
        setActiveUx(false);
        setActiveWallpaper(true);
        setActiveActiveIndustridesign(false);
        const filteredArray = projectData.filter((item) => {
            if (item.filtertype === "wallpaper") {
                return item;
            }
        });
        setFilterData(filteredArray);
    };
    const filterIndustridesign = () => {
        setActiveAll(false);
        setActiveUx(false);
        setActiveWallpaper(false);
        setActiveActiveIndustridesign(true);
        const filteredArray = projectData.filter((item) => {
            if (item.filtertype === "industridesign") {
                return item;
            }
        });
        setFilterData(filteredArray);
    };

    if (!projectData) {
        return <Loader />;
    }

    return (
        <main className="min-h-screen lg:p-12">
            <section className="container mx-auto">
                <div>
                    <div className="flex lg:justify-end md:justify-end justify-center text-gray-900 mb-4">
                        <p
                            onClick={filterAll}
                            className={
                                activeAll ? "filter-active mr-2" : "filter mr-2"
                            }
                        >
                            All
                        </p>
                        <p
                            onClick={filterUx}
                            className={
                                activeUx ? "filter-active mr-2" : "filter mr-2"
                            }
                        >
                            Wallpaper Design
                        </p>
                        <p
                            onClick={filterWallpaper}
                            className={
                                activeWallpaper
                                    ? "filter-active mr-2"
                                    : "filter mr-2"
                            }
                        >
                            Industridesign
                        </p>
                        <p
                            onClick={filterIndustridesign}
                            className={
                                activeIndustridesign
                                    ? "filter-active mr-2"
                                    : "filter mr-2"
                            }
                        >
                            UX-design
                        </p>
                    </div>
                </div>
                <section className="grid gap-4 lg:grid-cols-2 grid-cols-1 content-center flex items-center container-article">
                    {filterData &&
                        filterData.map((project, index) => (
                            <Link
                                className="card-body"
                                to={"/project/" + project.slug.current}
                                key={project.slug.current}
                            >
                                <article
                                    className="block card-content relative rounded shadow leading-snug bg-white mr-10"
                                    key={index}
                                >
                                    <img
                                        src={project.mainImage.asset.url}
                                        alt={project.mainImage.alt}
                                        className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    <div className="opacity-0 hover:opacity-90 hover:bg-gray-900  transition-all duration-600 block relative h-full flex justify-start items-start pr-4 pb-4">
                                        <div className="flex flex-col">
                                            <span className="text-gray-50 text-4xl uppercase pl-10 pt-10 underline project-title">
                                                {project.title}
                                            </span>
                                            <span className="text-gray-50 px-10 mt-5 uppercase project-info">
                                                {project.place}
                                            </span>
                                            <span className="text-gray-50 px-10 mt-1 uppercase project-info">
                                                {project.projectType}
                                            </span>
                                            <p className="mt-4 text-lg text-gray-50 leading-relaxed px-10 project-info italic">
                                                {project.shortDescription}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                </section>
            </section>
        </main>
    );
};

export default Project;
