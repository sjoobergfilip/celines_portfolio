import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import LazyHero from "react-lazy-hero";
import BlockContent from "@sanity/block-content-to-react";
import "./Project.css";
import Loader from "../loader/Loader";

const SingleProject = () => {
    const [project, setProject] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == "${slug}"]{
              title,
              _id,
              slug,
              mainImage{
                  asset->{
                      _id,
                      url
                  }
              },
              body,
              place,
              mainDescription,
              mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }, 
            link,
            github,
            projectType,
            place,

          }`
            )
            .then((data) => setProject(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!project) return <Loader />;
    return (
        <main className="min-h-screen">
            <LazyHero color="#1D2938" imageSrc={project.mainImage.asset.url}>
                <h1 className="text-gray-50 text-4xl uppercase project-title font-space text-6xl">
                    {project.title}
                </h1>
            </LazyHero>
            <div className=" lg:px-30 py-12 lg:py-20 px-5 prose max-w-900 m-auto text-gray-900 flex flex-col">
                <BlockContent
                    blocks={project.body}
                    projectId="qbil2d7s"
                    dataset="production"
                />
            </div>
        </main>
    );
};

export default SingleProject;
