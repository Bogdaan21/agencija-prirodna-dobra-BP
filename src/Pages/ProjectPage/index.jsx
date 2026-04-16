import React from "react";
import PageHeading from "../../Components/PageHeading";
import InfoList from "../../Components/InfoSection";
import CardSection1 from "../../Components/CardSection/CardSection1";
import { pageTitle } from "../../helper";
import projectJson from "../../data/project.json";

export default function ProjectPage() {
  pageTitle("Project | LeafLife");

  const { breadcrumbsData } = projectJson.projectPage;
  const { projects } = projectJson;

  return (
    <>
      <PageHeading data={breadcrumbsData} />

      {projects.map((project) => {
        if (project.listData.imageSrc) {
          return <InfoList key={project.slug} data={project.listData} />;
        }
      })}
    </>
  );
}