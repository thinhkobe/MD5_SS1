import React from "react";

export default function Botton(title, href, onClick) {
  let Component = "botton";
  const props = {};
  if (onClick) {
    props.onClick = onClick;
  }
  return <div></div>;
}
