import { css } from "@emotion/css";
import React from "react";
import { Outlet, useParams } from "react-router-dom";

type Props = {};

export default function ProjectsPage({}: Props) {
  const { name } = useParams();

  const ProjectsSummary = <div>Summary for projects</div>;

  return <section>{name ? <Outlet /> : ProjectsSummary}</section>;
}
