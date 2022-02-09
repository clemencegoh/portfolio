import React from "react";
import "./Placeholder.scss";

type Props = {
  name?: string;
};

export default function Placeholder({ name }: Props) {
  return <div id="placeholder">Placeholder for {name}</div>;
}
