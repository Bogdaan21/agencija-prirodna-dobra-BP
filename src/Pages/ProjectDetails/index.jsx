import React from "react";
import { useParams } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import ProjectDetailsSection from "../../Components/ProjectDetails";
import { pageTitle } from "../../helper";
import projectJson from "../../data/project.json";
import GalleryPage from "../GalleryPage";

export default function ProjectDetailsPage() {
  const { slug } = useParams();

  const { projects } = projectJson;

  const project = projects.find((item) => item.slug === slug);

  // ❌ ako ne postoji projekat
  if (!project) {
    return <h2>Project not found</h2>;
  }

  // ✅ sad koristi direktno project
  pageTitle(`${project.title} | LeafLife`);

  return (
    <>
      {/* ✅ breadcrumbs */}
      <PageHeading data={project.breadcrumbs} />

      {/* ✅ svi podaci */}
      <ProjectDetailsSection data={project} />

      <GalleryPage data={project.gallery} />
    </>
  );
}
