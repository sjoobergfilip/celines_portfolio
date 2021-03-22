import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import { Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "../loader/Loader";
import "./Project.css";

const Project = () => {
    const [projectData, setProjectData] = useState(null);
    const [filterData, setFilterData] = useState(null);

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

    if (!projectData) {
        return <Loader />;
    }

    return (
        <main className="min-h-screen lg:p-12">
            <section className="container mx-auto lg:p-32 md:p-32 py-24">
                <section className="grid gap-4 lg:grid-cols-2 grid-cols-1 content-center flex items-center container-article">
                    {filterData &&
                        filterData.map((project, index) => (
                            <Link
                                className="card-body"
                                to={"/project/" + project.slug.current}
                                key={project.slug.current}
                            >
                                <article
                                    className="block card-content relative rounded shadow leading-snug bg-white"
                                    key={index}
                                >
                                    <img
                                        src={project.mainImage.asset.url}
                                        alt={project.mainImage.alt}
                                        className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    <div className="opacity-0 hover:opacity-90 hover:bg-gray-600 transition-all duration-600 block relative h-full flex justify-start items-start pr-4 pb-4">
                                        <div className="flex flex-col">
                                            <span className="text-gray-50 text-4xl uppercase pl-10 pt-10 project-title font-space">
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
